function ElectroDevice(power) {
  (this.name = ""),
    (this.voltage = 220),
    (this.electicityTariff = 3.81), // RUB 1.82 night tariff
    (this.power = power), // kWt
    (this.getElectroCost = function () {
      let ElectroCostHour = power * this.electicityTariff;
      ElectroCostHour = Number(ElectroCostHour.toFixed(2));
      let ElectroCostMinute = ElectroCostHour / 60;
      ElectroCostMinute = Number(ElectroCostMinute.toFixed(2));
      console.log(
        `На эксплуатацию "${this.name}" затрачивается ${ElectroCostHour} рублей за час работы или ${ElectroCostMinute} рублей в минуту`
      );
      return ElectroCostHour;
    });
}

const electroSauna = new ElectroDevice(9);
electroSauna.name = "Электросауна";
electroSauna.brandname = "Harvia";

const backFlow = new ElectroDevice(4);
backFlow.name = "Противоток";
backFlow.brandname = "Pahlen";

const pumpFiltration = new ElectroDevice(0.55);
pumpFiltration.name = "Насос фильтрации";
pumpFiltration.brandname = "АMERICA";

const pumpChildrenSlide = new ElectroDevice(0.45);
pumpChildrenSlide.name = "Насос детской горки";
pumpChildrenSlide.brandname = "Kripson Ninfa NK-33";

const pumpJacuzzi = new ElectroDevice(2.2);
pumpJacuzzi.name = "Насос джакузи";
pumpJacuzzi.brandname = "Iberspa Jet 3 Steel";

const underWaterLight = new ElectroDevice(0.3);
underWaterLight.name = "Подводное освещение";
underWaterLight.brandname = "Pahlen";

const electroSaunaCost = electroSauna.getElectroCost();
console.log("");
console.log(electroSauna);

console.log("____Оборудование для бассейна____");
console.log("");
const backFlowCost = backFlow.getElectroCost();
const pumpFiltrationCost = pumpFiltration.getElectroCost();
const pumpChildrenSlideCost = pumpChildrenSlide.getElectroCost();
const pumpJacuzziCost = pumpJacuzzi.getElectroCost();
const underWaterLightCost = underWaterLight.getElectroCost();

const totalCosts = Number(
  electroSaunaCost +
    backFlowCost +
    pumpFiltrationCost +
    pumpChildrenSlideCost +
    pumpJacuzziCost +
    underWaterLightCost
).toFixed(2);

console.log("====================================================");
console.log(
  `ИТОГО: "Электрозатраты за 1 час активной эксплуатации частного бассейна составляют ${totalCosts} рублей.`
);
