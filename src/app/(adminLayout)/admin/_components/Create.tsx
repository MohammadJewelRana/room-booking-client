/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import envConfig from "@/config/envConfig";
import { useCreateRoom } from "@/hooks/createRoom.hook";
import { imgbbUpload } from "@/utils/ImageUpload";
import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Select, { SingleValue } from "react-select";
import { toast } from "sonner";

interface IFormInputs {
  roomTitle: string;
  rent: number;
  bedCount: { label: string; value: number } | null;
  memberCount: { label: string; value: number } | null;
  facilities: { value: string }[];
  images: File[];
}

const bedCountOptions = [
  { value: 1, label: "1 Bed" },
  { value: 2, label: "2 Beds" },
  { value: 3, label: "3 Beds" },
];

const memberCountOptions = [
  { value: 1, label: "1 Member" },
  { value: 2, label: "2 Members" },
  { value: 3, label: "3 Members" },
  { value: 4, label: "4 Members" },
  { value: 5, label: "5 Members" },
  { value: 6, label: "6 Members" },
  { value: 7, label: "7 Members" },
  { value: 8, label: "8 Members" },
];

const Create = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      facilities: [{ value: "" }],
      images: [],
      bedCount: null,
      memberCount: null,
    },
  });

  const { mutate: handleCreateRoom, isPending } = useCreateRoom();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "facilities",
  });

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const onSubmit = async (data: IFormInputs) => {
    let uploadedImages: string[] = [];

    if (selectedImages.length > 0) {
      uploadedImages = await imgbbUpload(selectedImages);
    } else {
      toast(" Add At-least One Image.Image upload failed!!");
      return;
    }

    if (uploadedImages.length > 0) {
      const formDataWithImages = {
        ...data,
        facilities: data.facilities.map((item) => item.value),
        bedCount: data?.bedCount?.value,
        memberCount: data?.memberCount?.value,
        images: uploadedImages,
      };
      console.log(formDataWithImages);

      handleCreateRoom(formDataWithImages);
      reset();
    } else {
      toast("Failed to create a room!!");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    setSelectedImages((prev) => [...prev, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setPreviewImages((prev) => [...prev, ...newPreviews]);

    setValue("images", [...selectedImages, ...files]);
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
  <>

<div>
  <h1 className="text-center text-3xl  font-bold py-8">Create a Room</h1>
</div>

     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Room Title */}
      <div>
        <label className="block mb-2">Room Title</label>
        <input
          {...register("roomTitle", { required: "Room Title is required" })}
          placeholder="Enter room title"
          className="border p-2 w-full bg-white text-black"
        />
        {errors.roomTitle && (
          <p className="text-red-500">{errors.roomTitle.message}</p>
        )}
      </div>

      {/* Rent */}
      <div>
        <label className="block mb-2">Rent</label>
        <input
          type="number"
          {...register("rent", { required: "Rent is required" })}
          placeholder="Enter rent amount"
          className="border p-2 w-full bg-white text-black"
        />
        {errors.rent && <p className="text-red-500">{errors.rent.message}</p>}
      </div>

      {/* Bed Count and Member Count in the same row */}
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        {/* Bed Count */}
        <div className="flex-1">
          <label className="block mb-2">Bed Count</label>
          <Controller
            name="bedCount"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={bedCountOptions}
                placeholder="Select bed count"
                isClearable
                onChange={(
                  selectedOption: SingleValue<{ value: number; label: string }>
                ) => {
                  field.onChange(selectedOption);
                }}
              />
            )}
          />
          {errors.bedCount && (
            <p className="text-red-500">{errors.bedCount.message}</p>
          )}
        </div>

        {/* Member Count */}
        <div className="flex-1 mt-4 sm:mt-0">
          <label className="block mb-2">Member Count</label>
          <Controller
            name="memberCount"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={memberCountOptions}
                placeholder="Select member count"
                isClearable
                onChange={(
                  selectedOption: SingleValue<{ value: number; label: string }>
                ) => {
                  field.onChange(selectedOption);
                }}
              />
            )}
          />
          {errors.memberCount && (
            <p className="text-red-500">{errors.memberCount.message}</p>
          )}
        </div>
      </div>

      {/* Facilities */}
      <div>
        <label className="block mb-2">Facilities</label>
        {fields.map((item, index) => (
          <div key={item.id} className="flex items-center space-x-2 mb-2">
            <input
              {...register(`facilities.${index}.value`, {
                required: "Facility is required",
              })}
              placeholder="Enter facility"
              className="border p-2 w-full bg-white text-black"
            />
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => append({ value: "" })}
        >
          Add Facility
        </button>
      </div>

      {/* Images */}
      <div>
        <label className="block mb-2">Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          {...register("images")} // Register images to the form
          onChange={handleImageChange}
          className="border p-2 w-full"
        />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {previewImages.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Preview ${index}`}
                className="w-full h-56 border p-2 rounded-md shadow-md object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 w-full bg-slate-900 text-white rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 transition duration-300 ease-in-out transform   my-8"
      >
        Submit
      </button>
    </form>
  </>
  );
};

export default Create;
