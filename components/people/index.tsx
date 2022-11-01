import { useState } from "react";
import { Role, Roles } from "./roles";

export const People = () => {
  const [selectedPerson, setSelectedPerson] = useState<Role>();

  const [people] = useState<Role[]>(Roles);

  const updateSelectedPerson = (name: string) => {
    const foundPerson = people.find((p) => p.name === name);

    if (!foundPerson) {
      return;
    }

    setSelectedPerson(foundPerson);
    return;
  };

  return (
    <div className="w-full flex justify-between flex-col md:flex-row">
      <div className="basis-1/2 p-4 flex flex-col gap-4">
        <label htmlFor="countries" className="text-2xl font-bold text-yellow-500">
          Select Your Name
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-xl"
          onChange={(e) => updateSelectedPerson(e.target.value)}
        >
          {people.map((person, index) => (
            <option defaultValue={person.name} key={index} value={person.name}>
              {person.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPerson ? (
        <div className="basis-1/2 p-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-yellow-500">
            {selectedPerson.name}: {selectedPerson.character}
          </h1>
          <p className="text-xl">
            {selectedPerson.role
              .replace("CHARACTER DESCRIPTION:", "")
              .replace("Male.", "")
              .replace("Female.", "")
              .replace("Gender open.", "")
              .replace("Gender open but dresses as a man. ", "")
              .replace("Male; ", "")}
            {selectedPerson.name === "Martin" ? <> Incredible at juggling.</> : <></>}
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default People;
