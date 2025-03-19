import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { signInWithGoogle, logout } from "../firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser && onAuthSuccess) {
        onAuthSuccess(currentUser);
      }
    });

    return () => unsubscribe();
  }, [onAuthSuccess]);

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithGoogle();
      if (userCredential.user && onAuthSuccess) {
        onAuthSuccess(userCredential.user);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      onClose();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{user ? "Welcome" : "Sign In"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {user ? (
            <>
              <p>Hi, {user.displayName}</p>
              <Button onClick={handleLogout} mt={4}>Logout</Button>
            </>
          ) : (
            <Button onClick={handleSignIn} mt={4}>Sign in with Google</Button>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
