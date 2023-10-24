import {
  Box,
  Button,
  Flex,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import classes from "@/styles/bannerCard.module.css";
import { FormEvent } from "react";

const initialValues = { email: "" };

const validator = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" }).nonempty("Email is required and important"),
});
type validate = z.infer<typeof validator>;

export default function Newsletter() {
  const form = useForm({
    initialValues: initialValues,
    validate: zodResolver(validator),
  });

  const handleSubmit = (values: validate) => {
    try {
      alert(
        `Thank you for subscribing to our newsletter. You will receive a subscription email to ${form.values.email}.`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      className={classes.inputWrapper}
      w="100%"
      bg={"#F8F8EA"}
      mt={40}
      mb={40}
    >
      <Title order={2}>Want to get updates on new subjects?</Title>
      <Text my={20}>Subscribe to our newsletter</Text>

      <Paper className={classes.shadow} w="70%" p={10}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Flex>
            <TextInput
              placeholder="Enter your email address"
              w="100%"
              variant="unstyled"
              {...form.getInputProps("email")}
            />
            <Button
              size="sm"
              type="submit"
              radius="xs"
              className={classes.shadow}
            >
              Subscribe
            </Button>
          </Flex>
        </form>
      </Paper>
    </Box>
  );
}
