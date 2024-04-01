"use client";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Route } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

type Props = {};

const formSchema = z.object({
  fullname: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(25, { message: "can't contain more than 25 characters" })
    .trim(),
  username: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(25, { message: "can't contain more than 25 characters" })
    .trim(),
  email: z
    .string()
    .email({ message: "invalid email" })
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  phoneNumber: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(10, { message: "can't contain more than 10 characters" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  confirmpassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

const SignupForm = (props: Props) => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmpassword: "",
    },
  });

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };
  const handleEyeClick2 = () => {
    setShowPassword2(!showPassword2);
  };
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (values.password !== values.confirmpassword) {
        return toast({
          // variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Email or Password is incorrect.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }

      toast({
        variant: "default",
        title: "Welcome back!",
        description: "Welcome back",
        action: <ToastAction altText="Try again">Go to home</ToastAction>,
      });
      router.push("/dashboard");
    } catch (error) {
      toast({
        // variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Email or Password is incorrect.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error(error);
    }
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-4 items-end justify-center ">
      <div className="flex flex-col gap-2 px-8 py- w-[350px]  md:py-5 h- items-center justify-center shadow-2xl rounded-lg sm:w-[500px]">
        <div className="flex flex-col gap-2  items-center">
          <h2 className="font-extrabold text-4xl ">Sign Up</h2>
          <div className="text-sm text-center ">
            <div className="text-black">
              Don&apos;t have an account?{" "}
              <a href="/landlord/sign-in" className="text-hgray-900 underline">
                Sign in
              </a>
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full py-2 "
          >
            <div className="space-y-3">
              <div>
                <div>Full Name</div>
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter Your Name" {...field} />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>Username</div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter a unique username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>Email</div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>Phone Number</div>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>Password</div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <button
                          className="absolute right-2 top-[0.65rem] text-xl"
                          type="button"
                          onClick={handleEyeClick}
                        >
                          {showPassword ? (
                            <EyeOff
                              size={22}
                              strokeWidth={1}
                              className="text-hgray-600"
                            />
                          ) : (
                            <Eye
                              size={22}
                              strokeWidth={1}
                              className="text-hgray-600"
                            />
                          )}
                        </button>
                      </div>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div>Confirm Password</div>
                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword2 ? "text" : "password"}
                            placeholder="Confirm Password"
                            {...field}
                          />
                        </FormControl>
                        <button
                          className="absolute right-2 top-[0.65rem] text-xl"
                          type="button"
                          onClick={handleEyeClick2}
                        >
                          {showPassword2 ? (
                            <EyeOff
                              size={22}
                              strokeWidth={1}
                              className="text-hgray-600"
                            />
                          ) : (
                            <Eye
                              size={22}
                              strokeWidth={1}
                              className="text-hgray-600"
                            />
                          )}
                        </button>
                      </div>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between w-full text-sm text-hgray-600">
                <div className="flex items-center gap-1 lg:gap-2 font-semibold">
                  <Checkbox id="terms" />
                  <p>I agree to the Terms and Conditions.</p>
                </div>
              </div>

              <div className="flex">
                <Button
                  type="submit"
                  className="w-full bg-hgray-900 text-hgray-0"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
