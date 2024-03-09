// RecordForm.js
import React from 'react';

function RecordForm({ record, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" value={record.name} onChange={onChange} required />
      <input type="email" name="email" placeholder="Email" value={record.email} onChange={onChange} required />
      <input type="tel" name="phone" placeholder="Phone" value={record.phone} onChange={onChange} required />
      <select name="database" value={record.database} onChange={onChange}>
        <option value="database1">Database 1</option>
        <option value="database2">Database 2</option>
        <option value="database3">Database 3</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RecordForm;
