"use client";

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select, { SingleValue } from "react-select";
import { toast } from "sonner";
import FXModal from "./FXModal";
import { useUpdateRoom } from "@/hooks/updateRoom.hook";

interface IUpdateRoomInputs {
  roomTitle: string;
  rent: number;
  bedCount: { label: string; value: number } | null;
  memberCount: { label: string; value: number } | null;
  facilities: { value: string }[];
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

export default function UpdateRoom({ item,refetch }: { item: any,refetch:any }) {
  const { register, handleSubmit, control, reset } = useForm<IUpdateRoomInputs>(
    {
      defaultValues: {
        roomTitle: item.roomTitle || "",
        rent: item.rent || 0,
        bedCount: item.bedCount
          ? {
              value: item.bedCount,
              label: `${item.bedCount} Bed${item.bedCount > 1 ? "s" : ""}`,
            }
          : null,
        memberCount: item.memberCount
          ? {
              value: item.memberCount,
              label: `${item.memberCount} Member${item.memberCount > 1 ? "s" : ""}`,
            }
          : null,
        facilities:
          item.facilities.map((facility: string) => ({ value: facility })) ||
          [],
      },
    }
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: "facilities",
  });
  const mutation = useUpdateRoom(item?._id); // Assuming `item` has an `id` property

  const onSubmit = async (data: IUpdateRoomInputs) => {
    const updatedData = {
      ...data,
      facilities: data.facilities.map((item) => item.value),
      bedCount: data.bedCount?.value,
      memberCount: data.memberCount?.value,
    };
    console.log(updatedData);

    mutation.mutate(updatedData, {
      onSuccess: () => {
        refetch();  
      },
    });
  };

  return (
    <FXModal
      buttonClassName="flex-1 text-white"
      buttonText="Edit"
      title="Update Room"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Room Title */}
        <div>
          <label className="block mb-2">Room Title</label>
          <input
            {...register("roomTitle", { required: "Room Title is required" })}
            placeholder="Enter room title"
            className="border p-2 w-full"
          />
        </div>

        {/* Rent */}
        <div>
          <label className="block mb-2">Rent</label>
          <input
            type="number"
            {...register("rent", { required: "Rent is required" })}
            placeholder="Enter rent amount"
            className="border p-2 w-full"
          />
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
                isClearable
                className="basic-single"
                classNamePrefix="select"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: "white",
                    borderColor: "gray",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isFocused ? "#f0f0f0" : "white", // Change color on hover
                    color: "black",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999,
                  }),
                }}
                onChange={(
                  selectedOption: SingleValue<{ value: number; label: string }>
                ) => {
                  field.onChange(selectedOption);
                }}
              />
            )}
          />
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
                isClearable
                className="basic-single"
                classNamePrefix="select"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: "white",
                    borderColor: "gray",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isFocused ? "#f0f0f0" : "white", // Change color on hover
                    color: "black",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999,
                  }),
                }}
                onChange={(
                  selectedOption: SingleValue<{ value: number; label: string }>
                ) => {
                  field.onChange(selectedOption);
                }}
              />
            )}
          />
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
                defaultValue={item.value}
                placeholder="Enter facility"
                className="border p-2 w-full"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ value: "" })}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Facility
          </button>
        </div>

        <button
          type="submit"
          className="px-4 py-2 w-full bg-slate-900 text-white rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 transition duration-300 ease-in-out transform"
        >
          Update Room
        </button>
      </form>
    </FXModal>
  );
}
