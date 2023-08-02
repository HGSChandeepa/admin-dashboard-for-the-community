import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Option {
  name: string;
}

interface MultiSelectListboxProps {
  filterTitle: string;
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions: (selectedOptions: Option[]) => void;
}

export function MultiSelectListbox({
  filterTitle,
  options,
  selectedOptions,
  setSelectedOptions,
}: MultiSelectListboxProps) {
  const maxVisibleOptions = 2; // Maximum number of selected options to display separately
  const remainingCount = selectedOptions.length - 1;

  const handleOptionClick = (option: Option) => {
    // Check if the option is already selected
    const isSelected = selectedOptions.includes(option);

    // Toggle the selection status
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const showCount =
    selectedOptions.length > 1 ? (
      <span className=" bg-orange-100/50 text-sm p-1  ml-1  text-orange-600   ">
        {" "}
        + {remainingCount}
      </span>
    ) : null;

  return (
    <Listbox as="div" className="relative p-1">
      <Listbox.Button className="relative w-full cursor-default rounded-full bg-white border-2 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm sm:text-sm">
        {selectedOptions.length > 0 ? (
          <span className="block truncate">
            {selectedOptions.length === 1
              ? selectedOptions[0].name // Display only the first selected option
              : selectedOptions[0].name}
            {showCount}
          </span>
        ) : (
          <span className="block truncate text-gray-500">
            <p className="flex gap-2">
              <span className=" hidden lg:flex md:flex flow-row">
                Filter By
              </span>
              {filterTitle}
            </p>
          </span>
        )}
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((option, index) => (
            <Listbox.Option
              key={index}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                }`
              }
              value={option}
              onClick={() => handleOptionClick(option)} // Handle click event
            >
              {({ active }) => (
                <>
                  <span
                    className={`block truncate ${
                      selectedOptions.includes(option)
                        ? "font-medium"
                        : "font-normal"
                    }`}
                  >
                    {option.name}
                  </span>
                  {selectedOptions.includes(option) ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
