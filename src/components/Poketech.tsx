import './Poketech.css';
import SmallButton from './SmallButton.tsx';
import BigButton from './BigButton.tsx';
import DisplayBar from './DisplayBar.tsx';

function Poketech(){
    return(
        <div className="Outer">
            &nbsp;
            <div className="MidBar">&nbsp;</div>
            <div className="Screen">
                {/*Results display bar */}
                <DisplayBar />
                {/*The calculator buttons.... oughhh*/}
                {/*First row*/}
                <SmallButton label="7"/>
                <SmallButton label="8"/>
                <SmallButton label="9"/>
                <BigButton label="C" />
                {/*Second row*/}
                <br></br>
                <SmallButton label="4"/>
                <SmallButton label="5"/>
                <SmallButton label="6"/>
                <SmallButton label="+"/>
                <SmallButton label="-"/>
                {/*Third row*/}
                <br></br>
                <SmallButton label="1"/>
                <SmallButton label="2"/>
                <SmallButton label="3"/>
                <SmallButton label="x"/>
                <SmallButton label="÷"/>
                {/*Fourth row*/}
                <br></br>
                <BigButton label="0"/>
                <SmallButton label="."/>
                <BigButton label="="/>
            </div>
            {/*the outer two buttons, the pink ones that are just for show*/}
            <div className='ButtonColumn'>
                <button className="TopSideButton"></button>
                <button className="BottomSideButton"></button>
            </div>
            {/*the leftmost button*/}
            <button className="LeftSideButton"></button>
        </div>
    )
}

export default Poketech;