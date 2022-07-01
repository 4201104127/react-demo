import { Component } from "react";

class Props extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <ul>
                    <li><b>Tên:</b> {this.props.name}</li>
                    <li><b>Loại:</b> {this.props.type}</li>
                    <li><b>Màu:</b>  {this.props.color}</li>
                    <li><b>Kích cỡ:</b>  {this.props.size}</li>
                    <li><b>Số lượng:</b>  {this.props.number}</li>
                </ul>
            </div>
        )
    }
}

export default Props