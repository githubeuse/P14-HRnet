import Select from 'react-select';
import PropTypes from 'prop-types';

/**
 * Composant DropdownMenu pour afficher un menu déroulant.
 * Utilise le composant react-select pour le rendu du menu déroulant.
 * 
 * @param {Array} options - Les options du menu déroulant.
 * @param {function} onChange - Fonction appelée lorsque la sélection change.
 * @param {string} name - Le nom du champ pour identifier le menu déroulant.
 * @param {object} value - La valeur sélectionnée.
 */

const DropdownMenu = ({ inputId, options, onChange, value, name }) => {
    return (
        <Select
            inputId={inputId}
            options={options}
            onChange={(selectedOption) => onChange(selectedOption, name)}
            value={value}
        />
    );
};

DropdownMenu.propTypes = {
    inputId: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.object,
    name: PropTypes.string.isRequired,
};

export default DropdownMenu;