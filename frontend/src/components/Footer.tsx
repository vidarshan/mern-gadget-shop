import { Container, Group, Text } from "@mantine/core";
import { AiOutlineUsb } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#000", padding: "2rem", marginTop: "2rem" }}
    >
      <Container sx={{ maxWidth: "85vw" }}>
        <Group direction="row" position="apart">
          <Group>
            <AiOutlineUsb color="white" />
            <Text weight={700} sx={{ color: "white" }}>
              Techstop
            </Text>
          </Group>
          <div>
            <Group>
              <Text sx={{ color: "gray" }} weight={600} size="md">
                About
              </Text>
              <Text sx={{ color: "gray" }} weight={600} size="md">
                Shop
              </Text>
              <Text sx={{ color: "gray" }} weight={600} size="md">
                Terms and Conditions
              </Text>
              <Text sx={{ color: "gray" }} weight={600} size="md">
                Privacy Policy
              </Text>
            </Group>
          </div>
        </Group>
        <Group position="center" sx={{ marginTop: "1rem" }}>
          <Text sx={{ color: "gray" }} weight={600} size="xs">
            &copy; 2022 | Techstop
          </Text>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
