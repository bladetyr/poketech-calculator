import './Buttons.css'

// inline prop just for funsies
function BigButton({ label }: {label: string}){
    return(
        <button className="BigButton"><b>{label}</b></button>
    );
}

export default BigButton;