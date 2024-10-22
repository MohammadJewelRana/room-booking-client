/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import Select, { SingleValue } from "react-select";

interface IFormInputs {
  roomTitle: string;
  rent: number;
  bedCount: { label: string; value: number } | null; // Allow null
  memberCount: { label: string; value: number } | null; // Allow null
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
];

const Create = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      facilities: [{ value: "" }],
      images: [],
      bedCount: null, // Initialize to null
      memberCount: null, // Initialize to null
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "facilities",
  });

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prev) => [...prev, ...newPreviews]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Room Title */}
      <div>
        <label className="block mb-2">Room Title</label>
        <input
          {...register("roomTitle", { required: "Room Title is required" })}
          placeholder="Enter room title"
          className="border p-2 w-full bg-white text-black"
        />
        {errors.roomTitle && <p className="text-red-500">{errors.roomTitle.message}</p>}
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

      {/* Bed Count */}
      <div>
        <label className="block mb-2">Bed Count</label>
        <Controller
          name="bedCount"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={bedCountOptions}
              placeholder="Select bed count"
              isClearable // Allows the user to clear the selection
              onChange={(selectedOption: SingleValue<{ value: number; label: string }>) => {
                field.onChange(selectedOption);
              }}
            />
          )}
        />
        {errors.bedCount && <p className="text-red-500">{errors.bedCount.message}</p>}
      </div>

      {/* Member Count */}
      <div>
        <label className="block mb-2">Member Count</label>
        <Controller
          name="memberCount"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={memberCountOptions}
              placeholder="Select member count"
              isClearable // Allows the user to clear the selection
              onChange={(selectedOption: SingleValue<{ value: number; label: string }>) => {
                field.onChange(selectedOption);
              }}
            />
          )}
        />
        {errors.memberCount && <p className="text-red-500">{errors.memberCount.message}</p>}
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
          onChange={handleImageChange}
          className="border p-2 w-full"
        />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {previewImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Preview ${index}`}
              className="w-full h-32 object-cover"
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Create;
