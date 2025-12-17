import './prodCard.css'
export default function productCardB() {
    const Text = "PowerCube X GaN"
    const smallText = "(Midnight Edition)"
    const Prise = 399
    return (
        <div className="productB-card">
            <div className="sectionNav">

                <div className="action">
                    <div className="box16"></div>
                    <div className="actionBox">
                        <i className="fi fi-rr-heart"></i>
                        <i className="fi fi-sr-shopping-bag"></i>
                    </div>
                    <div className="box17"></div>

                </div>

            </div>
            <div className="sectionContent">
                <p>
                    {Text}
                    <h4>
                        {smallText}
                    </h4>
                </p>
                <span>
                    ${Prise}
                </span>
            </div>
        </div>
    )
}