import React, { useState } from "react";
import InstagramSearchBar from "@/components/ui/InstagramSearchBar";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const handleSearch = (username: string) => {
    console.log("Searching for:", username);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return;
}