export const VNDtoUSD = (props) => {
    function convert(vnd) {
        return vnd/23632
    }
    return (
        <div>
            <span>USD </span>
            <input onChange={(e) => {
                const vnd = e.target.value
                const usd = convert(vnd)
                props.onHandleChange({
                    usd, vnd
                })
            }} value={props.value}></input>
        </div>
    )
}