import React from "react";
import { Table } from "../../components/Table";
import { studentData } from "../../data";
import {
  SContentWrapper,
  STitle,
  SActionWrapper,
  SSearchIcon,
} from "./StudentListPage.styled";
import { columns } from "./columns";
import { Input } from "../../components/Inputs/Input";
import { FilterDropdown } from "../../components/FilterDropdown";
import { SStudentListContainer } from "./StudentListPage.styled";
import { useForm } from "react-hook-form";

const getColumnFilters = (fields, filters) => {
  return Object.entries(filters)
    .filter(
      ([key, value]) => fields.find(({ id }) => key === id) && value.length > 0
    )
    .map(([key, value]) => ({
      id: key,
      value,
    }));
};

export const StudentListPage = () => {
  const { register, watch, getValues, setValue } = useForm();

  const fields = [
    {
      id: "status",
      type: "multiple",
      values: ["Registered", "Rejected", "Active", "Completed", "Failed"],
    },
    {
      id: "gender",
      type: "multiple",
      values: ["Female", "Male"],
    },
    {
      id: "date_of_birth",
      type: "date",
    },
  ];

  return (
    <div>
      <SStudentListContainer>
        <SContentWrapper>
          <STitle>სტუდენტების სია</STitle>
          <SActionWrapper>
            <FilterDropdown
              fields={fields}
              register={register}
              watch={watch}
              getValues={getValues}
              setValue={setValue}
            />
            <Input
              name="global_filter"
              width="16.25rem"
              placeholder="ძებნა"
              LeftComponent={
                <SSearchIcon src="assets/svg/search.svg" alt="filter" />
              }
              register={register}
            />
          </SActionWrapper>
          <Table
            columns={columns}
            data={studentData}
            columnFilters={getColumnFilters(fields, watch())}
            globalFilter={watch("global_filter")}
            setGlobalFilter={(val) => setValue("global_filter", val)}
          />
        </SContentWrapper>
      </SStudentListContainer>
    </div>
  );
};
