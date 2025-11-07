import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm({ onAdded = () => {} }) {
  const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompte((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}/comptes`, compte)
      .then(() => {
        alert('Compte ajouté');
        onAdded();
        setCompte({ solde: '', dateCreation: '', type: '' });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input
            type="number"
            name="solde"
            className="form-control"
            onChange={handleChange}
            value={compte.solde}
          />
        </div>
        <div className="mb-3">
          <label>Date de Création</label>
          <input
            type="date"
            name="dateCreation"
            className="form-control"
            onChange={handleChange}
            value={compte.dateCreation}
          />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select
            name="type"
            className="form-select"
            onChange={handleChange}
            value={compte.type}
          >
            <option value="">-- Sélectionnez --</option>
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;