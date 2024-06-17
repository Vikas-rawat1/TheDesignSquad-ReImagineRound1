import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

function Menu() {
  const navText = {
    border: "1px solid #4A5568",
    borderRadius: "0.5rem",
    padding: "8px",
    color: "#FFFFFF",
    fontWeight:"bold",
  
  };

  const navBrandText = {
    ...navText,
    backgroundColor: "#2D3748",
  };

  return (
    <>
      <div className="sm:fixed sm:z-20 sm:bottom-5 sm:left-0 sm:right-0 sm:flex sm:justify-center sm:items-center">
        <Navbar className="text-white w-full max-w-2xl border-gray-500 rounded-lg">
          <NavbarBrand>
            <p style={navBrandText} className="font-bold text-inherit">
              WebbyAward
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-2" justify="center">
            <NavbarItem style={navText}>
              <Link color="foreground" href="#">
                About
              </Link>
            </NavbarItem>
            <NavbarItem style={navText} isActive>
              <Link href="#" aria-current="page">
                Winners
              </Link>
            </NavbarItem>
            <NavbarItem style={navText}>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem style={navText}>
              <Link color="foreground" href="#">
                Resources
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem style={navText} className="hidden sm:block">
              <Link color="foreground" href="#">
                Webby Talks
              </Link>
            </NavbarItem>
            <NavbarItem className="block md:hidden">
              <Link style={navText} color="foreground" href="#">
                Login
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
}

export default Menu;
