import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale/fr';
registerLocale('fr', fr);
import 'react-datepicker/dist/react-datepicker.css';

/**
 * Composant CustomDatePicker pour afficher un sélecteur de date personnalisé.
 * Utilise le composant react-datepicker pour le rendu du sélecteur de date.
 * 
 * @param {string} locale - La locale à utiliser pour le sélecteur de date.
 * @param {Date} selected - La date sélectionnée.
 * @param {function} onChange - Fonction appelée lorsque la date change.
 * @param {string} id - L'identifiant du champ de date.
 * @param {string} name - Le nom du champ de date.
 */

const CustomDatePicker = ({locale, selected, onChange, id, name }) => {
    return (
        <DatePicker
            locale={locale}
            selected={selected}
            onChange={onChange}
            id={id}
            name={name}
        />

    )
}

CustomDatePicker.propTypes = {
    locale: PropTypes.string.isRequired,
    selected: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default CustomDatePicker; 