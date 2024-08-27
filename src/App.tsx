import Card from "./component/Card";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Card
          item="./images/mous1.jpg"
          title="  Portronics Toad One Bluetooth Mouse with 2.4 GHz & BT 5.3 Dual
          Wireless, 6 Buttons, Rechargeable, RGB Lights, Connect 3 Devices,
          Ergonomic Design for Laptop, Smartphone, Tablet (Black)"
          price="699"
        />
        <Card
          item="./images/mouse2.jpg"
          title="cimetech Dual Mode (BT 5.1+2.4G) Wireless Mouse Rechargeable, Portable Lightweight Ambidextrous Mouse with LED Lights, Compatible with iPad/Laptop/PC/Mac OS/Windows/Chrome OS - Black"
          price="680"
        />
      </main>
    </>
  );
}

export default App;
