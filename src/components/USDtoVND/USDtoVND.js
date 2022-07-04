export const USDtoVND = (props) => {
    function convert(usd) {
        return usd*23632
    }
    return (
        <div>
            <span>USD </span>
            <input onChange={(e) => {
                const usd = e.target.value
                const vnd = convert(usd)
                props.onHandleChange({
                    usd, vnd
                })
            }} value={props.value}></input>
        </div>
    )
}