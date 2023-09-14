import React from "react";

function FormInput({ label, name, type, defaultValue, size}) {
  return (
    <div>
      <div className="form-control ">
        <label className="label">
          <span className="label-text capitalize">{label}</span>
        </label>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue}
          className={`input input-bordered rounded-md ${size}`} />
      </div>
    </div>
  );
}

export default FormInput;
