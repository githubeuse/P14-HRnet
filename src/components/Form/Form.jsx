import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addEmployee } from "../../store/features/employees/employeesSlice";

import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { departmentOptions } from "../../constants/departmentOptions";
import { stateOptions } from "../../constants/stateOptions";

import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import { format } from "date-fns";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    department: departmentOptions[0],
    state: stateOptions[0],
    dateOfBirth: new Date(),
    startDate: new Date(),
  });
  const dispatch = useDispatch();

  // Gestion des changements dans les champs de texte
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion des changements dans les dropdowns
  const handleDropdownChange = (selectedOption, name) => {
    setFormData({
      ...formData,
      [name]: selectedOption,
    });
  };

  // Gestion des changements dans les sélecteurs de date
  const handleDateChange = (selectedDate, name) => {
    setFormData({
      ...formData,
      [name]: selectedDate,
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      dateOfBirth: format(formData.dateOfBirth, "yyyy-MM-dd"), // Convertir en chaîne de caractères
      startDate: format(formData.startDate, "yyyy-MM-dd"),
    };
    dispatch(addEmployee(formattedData));
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 1 */}
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      {/* 2 */}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      {/* 3 */}
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <CustomDatePicker
        selected={formData.dateOfBirth}
        onChange={(date) => handleDateChange(date, "dateOfBirth")}
        id="dateOfBirth"
        name="dateOfBirth"
        locale="fr"
      />
      {/* 4 */}
      <label htmlFor="startDate">Start Date</label>
      <CustomDatePicker
        selected={formData.startDate}
        onChange={(date) => handleDateChange(date, "startDate")}
        id="startDate"
        name="startDate"
        locale="fr"
      />
      <fieldset>
        <legend>Address</legend>
        {/* 5 */}
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        {/* 6 */}
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        {/* 7 */}

        <label htmlFor="state">State</label>
        <DropdownMenu
          inputId="state"
          options={stateOptions}
          value={formData.state}
          onChange={handleDropdownChange}
          name="state"
        />

        {/* 8 */}
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </fieldset>

      {/* 9 */}
      <label htmlFor="department">Department</label>
      <DropdownMenu
        inputId="department"
        options={departmentOptions}
        value={formData.department}
        onChange={handleDropdownChange}
        name="department"
      />
      <button type="submit">Save</button>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
