"use client";

import React, { useState } from "react";
import PageHeader from "@/components/common/layout/PageHeader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { articleAdmin } from "@/helpers/validation/admin/article";

export default function AddArticlePage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useForm();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof articleAdmin>>({
    resolver: zodResolver(articleAdmin),
    defaultValues: {
      title: "",
      content: "",
      imageUrl: "",
    },
  });

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsLoading(true);
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
    setIsLoading(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const renderArticleImage = () => {
    if (imagePreview) {
      return (
        <Image src={imagePreview} alt="placeholder" width={400} height={400} />
      );
    } else if (userData?.photo) {
      return (
        <img
          src={userData.photo}
          alt="Article"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      );
    }
  };

  async function onSubmit(values: z.infer<typeof articleAdmin>) {
    console.log(values);
  }

  return (
    <>
      <PageHeader
        title="Add article."
        description="Add educational articles for students"
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-16">
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <div className="flex flex-col gap-16">
                  <FormItem>
                    <div className="flex flex-col gap-3">
                      <FormLabel>
                        <div className="text-lg font-bold">
                          Add a cover photo for your article
                        </div>
                      </FormLabel>
                      <div className="text-gray-400 text-sm">
                        You’ll need 3 photos to get started.
                      </div>
                    </div>
                    <div className="pt-8">
                      <FormControl>
                        <div className="flex flex-col items-center justify-center bg-white w-full h-96 border border-gray-300 rounded-lg gap-4">
                          {renderArticleImage()}
                          <Image
                            src="/assets/images/admin/image-upload.png"
                            alt="Article"
                            width={80}
                            height={80}
                          />
                          <Input
                            {...register("imageUrl")}
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            style={{ display: "none" }}
                          />
                          <Button
                            variant="outlineGray"
                            onClick={handleButtonClick}
                          >
                            Upload photo
                          </Button>
                        </div>
                      </FormControl>
                    </div>
                  </FormItem>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <div className="flex flex-col gap-16">
                  <FormItem>
                    <div className="flex flex-col gap-3">
                      <FormLabel>
                        <div className="text-lg font-bold">
                          Give your article a title
                        </div>
                      </FormLabel>
                      <div className="text-gray-400 text-sm">
                        Short and concise titles work best.
                      </div>
                    </div>
                    <div className="pt-8">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your article title"
                          className="py-6 px-4"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <div className="flex flex-col gap-16">
                  <FormItem>
                    <div className="flex flex-col gap-3">
                      <FormLabel>
                        <div className="text-lg font-bold">
                          Create your content
                        </div>
                      </FormLabel>
                      <div className="text-gray-400 text-sm">
                        Be as detailed as you want.
                      </div>
                    </div>
                    <div className="pt-8">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your article content"
                          className="py-6 px-4"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                </div>
              )}
            />
            <div className="flex gap-6 items-center justify-center pt-16 pb-32">
              <Button
                variant="outlineGray"
                type="submit"
                loading={loading}
              >
                Clear
              </Button>
              <Button
                variant="fillBlack"
                type="submit"
                loading={loading}
              >
                Add article
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
