import axios from "axios";

const rxAPIDomain = "https://rxnav.nlm.nih.gov";

export const getRxByName = (name) => {
    const rxRequest = `/REST/Prescribe/drugs.json?name=${name}`;

    axios.get(rxAPIDomain + rxRequest).then((res) => {
        console.log(res.data);
    });
};
