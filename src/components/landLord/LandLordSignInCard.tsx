"use client";

import React, { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { signInSchema } from "@/helpers/validation/landlord/auth";

type Props = {};

const LandLordSignInCard = (props: Props) => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center flex flex-col gap-4">
        <p className="font-bold text-3xl">Sign in</p>
        <p className="font-light text-sm">
          Don&apos;t have an account?{" "}
          <Link href={"./sign-up"} className="underline">
            Sign up
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a unique username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 mt-3 mr-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LandLordSignInCard;
