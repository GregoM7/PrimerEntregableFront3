import Data from "./data.json";
import React, { Component } from "react";
import Choices from "./Choice";
import Swal from "sweetalert2"

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            id: "",
            story: [],
            choice: {
                a: "",
                b: "",
            },
            letter: "",
            listChoices: [],
        };
    }
    componentDidMount() {
        this.setState({
            count: this.state.count,
            id: `${Data[0].id}`,
            story: `${Data[0].historia}`,
            choice: {
                a: `${Data[0].opciones.a}`,
                b: `${Data[0].opciones.b}`,
            }
        });
    }
    opcion = (e) => {
        if (e.target.id === "a" && this.state.count <= 7) {
            this.setState({
                story: `${Data[this.state.count ].historia}`,
                choice: {
                    a: `${Data[this.state.count ].opciones.a}`,
                    b: `${Data[this.state.count ].opciones.b}`
                },
                count: this.state.count + 2,
                letter: e.target.id,
                listChoices: [this.state.letter, ...this.state.listChoices]
            })
        } else if (e.target.id === "b" && this.state.count <= 7) {
            this.setState({
                story: `${Data[this.state.count + 1].historia}`,
                choice: {
                    a: `${Data[this.state.count + 1].opciones.a}`,
                    b: `${Data[this.state.count + 1].opciones.b}`
                },
                count: this.state.count + 2,
                letter: e.target.id,
                listChoices: [this.state.letter, ...this.state.listChoices]
            })
        } else {
            Swal.fire({
                title: 'Quieres repetir la historia?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Repetir',
                denyButtonText: `Finalizar`,
              }).then((result) => {
                if (result.isConfirmed) {
                   window.location.reload();
                } else if (result.isDenied) {
                  Swal.fire('Se ha finalizado la historia', '', 'info')
                }
              })
        }
        console.log(this.state.count)
        console.log(this.state.listChoices)
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{this.state.story}</h1>
                <div className="opciones">
                    <div className="opcion">
                        <button className="botones" onClick={this.opcion} id="a">A</button>
                        <h2 >{this.state.choice.a}</h2>
                    </div>
                    <div className="opcion">
                        <button className="botones" onClick={this.opcion} id="b" >B</button>
                        <h2 >{this.state.choice.b}</h2>
                    </div>
                </div>
                <Choices choice={this.state.letter} listChoices= {this.state.listChoices}/>
            </div>
        )
    }
}
export default History;