import './Buttons.css'

// make a type for the prop
type LabelProp = {
    label: string;
}

function SmallButton({ label }: LabelProp){
    return(
        <button className="SmallButton"><b>{label}</b></button>
    );
}

export default SmallButton;