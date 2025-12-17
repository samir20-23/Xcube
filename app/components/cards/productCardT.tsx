import './prodCard.css'
export default function productCardT() {
    const Text = "PowerCube X GaN"
    const smallText = "(Midnight Edition)"
    const Prise = 399
    // PowerCube X GaN
    // $399
    // (Midnight Edition)
    // 65W Max Output
    // O
    // PowerCube X
    // GaN Fast Charger
    // Charge faster. Carry lighter.
    // POWER
    // Compact. Safe Universal
    // OCUBE
    // PowerCube X GaN
    // $399
    // (Sandstone Edition)

    return (
        <div className="productT-card">
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