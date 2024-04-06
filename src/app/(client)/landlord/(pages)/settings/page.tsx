"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import ILandlordDetailsData from "@/types/landlord-details";
import { getLandlordById } from "@/helpers/api/landlord/getLandlordById";
import { updateLandlord } from "@/helpers/api/landlord/updateCustomer";
import PageHeader from "@/components/common/layout/PageHeader";

export default function Setting() {
  const router = useRouter();
  const { toast } = useToast();

  // State to hold token validity & data

  // const [tokenValid, setTokenValid] = useState(false);
  const [landllordData, setlandlordrData] = useState<
    ILandlordDetailsData | any
  >(null);

  // Form handling with react-hook-form
  const { register, handleSubmit, setValue, getValues } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  // Effect to fetch customer data when the component mounts
  useEffect(() => {
    const fetchCustomerData = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (!jwtToken) {
        router.push("/");
        return;
      }

      try {
        // const { status, data } = await decodeToken(jwtToken);
        // if (status === 200) {
        //   setTokenValid(true);
        //   // Fetch customer details using getCustomerById
        //   const customerId = data.id;
        //   try {
        //     const customerData = await getLandlordById(customerId);
        //     setlandlordrData(customerData);
        //     // Set form field values using setValue
        //     for (const field in customerData) {
        //       setValue(field, customerData[field]);
        //     }
        //   } catch (error) {
        //     console.error("Failed to fetch customer data", error);
        //   }
        // } else {
        //   router.push("/");
        // }
      } catch (error) {
        console.error("Error decoding token:", error);
        router.push("/");
      }
    };

    fetchCustomerData();
  }, [router, setValue, setlandlordrData]);

  // Reference to file input element
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Function to trigger file input click
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle form submission
  //   const onSubmit = async (data: any) => {
  //     setIsLoading(true);
  //     const jwtToken = localStorage.getItem("jwtToken");

  //     if (!jwtToken) {
  //       router.push("/");
  //       return;
  //     }

  //     try {
  //       const { status, data: decodedData } = await decodeTnoke(jwtToken);
  //       if (status === 200) {
  //         const customerId = decodedData.id;

  //         // Get all form values, including edited and default values
  //         const formData: any = {};
  //         for (const field in landllordData) {
  //           formData[field] = getValues(field);
  //         }

  //         // Include imageUrl in the data

  //         // Log the data before making the request
  //         console.log("Data before making the request:", formData);

  //         // Update customer data using the updateCustomer function
  //         try {
  //           const response = await updateLandlord(customerId, formData);
  //           console.log("Landlord data updated successfully", response);
  //           toast({
  //             variant: "default",
  //             title: "Changes saved",
  //             description:
  //               "Your changes have been saved successfully, please Sign In again to continue.",
  //             duration: 3000,
  //           });
  //           setTimeout(() => {
  //             logout();
  //             router.push("/sign-in");
  //           }, 3000);
  //         } catch (error) {
  //           console.error("Error updating landlord data", error);
  //           toast({
  //             variant: "destructive",
  //             title: "Error",
  //             description: "An error occurred while saving your changes",
  //             duration: 3000,
  //           });
  //         }
  //       } else {
  //         router.push("/");
  //       }
  //     } catch (error) {
  //       console.error("Error decoding token:", error);
  //       router.push("/");
  //     }
  //   };

  if (isLoading) {
    return "";
  }

  // If token is not valid, show AuthLoader

  // if (!tokenValid) {
  //   return "";
  // }

  // Helper function to get form field value, including default value
  const getValue = (field: any) => {
    const editedValue = getValues(field);
    return editedValue !== undefined ? editedValue : landllordData[field];
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    router.push("/sign-in");
  };

  return (
    <>
      <Container>
        <PageHeader title="Account Settings" isSearch={false} />
        <div className="pb-10">
          <div className="border border-gray-500 rounded-lg p-5 w-full gap-5 ">
            <div className="flex  w-full  lg:flex-row">
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="  ">
                      <div>First name</div>
                      <div className="pt-2">
                        <Input
                          {...register("firstname")}
                          className=" rounded-md border-gray-200/40"
                          placeholder="Your first name"
                          defaultValue={landllordData?.firstname || ""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>Last name</div>
                    <div className="pt-2">
                      <Input
                        {...register("lastname")}
                        className="rounded-md border-gray-200/40"
                        placeholder="Your last name"
                        defaultValue={landllordData?.lastname || ""}
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <div>Email</div>
                    <div className="pt-2">
                      <Input
                        {...register("email")}
                        className=" rounded-md border-gray-200/40"
                        placeholder="Email address"
                        defaultValue={landllordData?.email || ""}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div>Phone</div>
                    <div className="pt-2">
                      <Input
                        {...register("phoneNumber")}
                        className="rounded-md border-gray-200/40"
                        placeholder="Phone number"
                        defaultValue={landllordData?.phoneNumber || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
