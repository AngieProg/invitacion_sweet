import { portada } from "../assets/images";

const Hero = () => (
  <div className="flex flex-col items-center justify-center">
    <h1>MIS XV AÑOS</h1>
    <img src={portada} alt="foto portada" />
    <div>
      <h1>Valentina</h1>
    </div>
    <table>
      <tbody>
        <tr>
          <td>CAPILLA SAN MARTIN</td>
          <td>21 DE ABRIL 2024</td>
          <td>SALON RUIZ SOLARES</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Hero;
