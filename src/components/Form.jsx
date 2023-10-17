

const Form = () => {
  return (
    <form action="">
        <h2>Reservas</h2>

        <label htmlFor="">Nombre</label>
        <input type="text" />

        <label htmlFor="">Nombre</label>
        <input type="text" />

        <label htmlFor="">Nombre</label>
        <input type="text" />

        <label htmlFor="hour">Elige una horario:</label>
        <select name="hour">
            <option>13.00</option>
            <option>14.00</option>
            <option>15.00</option>
            <option>16.00</option>
            <option>17.00</option>
            <option>18.00</option>
            <option>19.00</option>
            <option>20.00</option>
        </select>

        <button type="sumbit">Submit</button>

    </form>
  )
}

export default Form