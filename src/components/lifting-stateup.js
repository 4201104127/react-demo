export function ComponentCha() {
    function receiveData(data) {
        console.log('data receive', data);
    }

    return (
        <ComponentCon onReceiveData={receiveData()} />
    )
}

function ComponentCon(props) {
    return (
        <button onClick={() => {
            props.onReceiveData('data from child')
        }}>Send to father</button>
    )
}