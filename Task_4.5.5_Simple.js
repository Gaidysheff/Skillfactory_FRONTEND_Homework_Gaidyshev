class ElectroDevice {
  constructor(power, timeOn, timeOff) {
    this.name = "",
    this.voltage = 220,
    this.electricityTariff = 3.81, // RUB 1.82 night tariff
    this.power = power,
    this.timeOn = timeOn,
    this.timeOff = timeOff;
  }

  getElectroCost() {
    let electroCostHour = this.power * this.electricityTariff;
    electroCostHour = Number(electroCostHour.toFixed(2));
    let electroCostMinute = electroCostHour / 60;
    electroCostMinute = Number(electroCostMinute.toFixed(2));
    console.log(`На эксплуатацию "${this.name}" затрачивается ${electroCostHour} рублей за час работы или ${electroCostMinute} рублей в минуту`);
    return electroCostHour;
  }

  getCost() {
    if (this.timeOn && this.timeOff) {
      let getDate = (string) => new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]);
      let difference = getDate(this.timeOff) - getDate(this.timeOn);
      let differenceResult, hours;

      if (difference > 0) {
        differenceResult = difference;
        hours = Number(differenceResult / 3600000).toFixed(2);
      } else {
        differenceResult = Math.abs(getDate(this.timeOn) - getDate(this.timeOff));
        hours = Number(24 - differenceResult / 3600000).toFixed(2);
      }
      let totalElectroCost = Number(hours * this.power * this.electricityTariff).toFixed(2);
      console.log(`"${this.name}" проработал/a/о ${hours} часа/часов. В результате затрачено электроэнергии на ${totalElectroCost} руб.`);
      return totalElectroCost;

    } else if (this.timeOn && !this.timeOff) {
      console.log(`"${this.name}" был/а/о включен/а/о в ${this.timeOn} и до сих пор работает`);
      return 0;

    } else {
      console.log(`"${this.name}" не работал/а/о`);
      return 0;
    }
  }
}

const electroSauna = new ElectroDevice(9, "21:00", "00:35");
electroSauna.name = "Электросауна";
electroSauna.brandname = "Harvia";

const backFlow = new ElectroDevice(4, "23:37", "00:08");
backFlow.name = "Противоток";
backFlow.brandname = "Pahlen";

const pumpFiltration = new ElectroDevice(0.55, "23:00");
pumpFiltration.name = "Насос фильтрации";
pumpFiltration.brandname = "АMERICA";

const pumpChildrenSlide = new ElectroDevice(0.45);
pumpChildrenSlide.name = "Насос детской горки";
pumpChildrenSlide.brandname = "Kripson Ninfa NK-33";

const pumpJacuzzi = new ElectroDevice(2.2, "22:00", "23:55");
pumpJacuzzi.name = "Насос джакузи";
pumpJacuzzi.brandname = "Iberspa Jet 3 Steel";

const underWaterLight = new ElectroDevice(0.3, "22:00", "00:35");
underWaterLight.name = "Подводное освещение";
underWaterLight.brandname = "Pahlen";

const electroSaunaCost = electroSauna.getElectroCost();
console.log("");
console.log(electroSauna);

console.log(
  "____________Оборудование для бассейна. Затраты эл/энергии за 1 час работы___________"
);
console.log("");
const backFlowCost = backFlow.getElectroCost();
const pumpFiltrationCost = pumpFiltration.getElectroCost();
const pumpChildrenSlideCost = pumpChildrenSlide.getElectroCost();
const pumpJacuzziCost = pumpJacuzzi.getElectroCost();
const underWaterLightCost = underWaterLight.getElectroCost();

const totalCostsPerHour = Number(
  electroSaunaCost +
    backFlowCost +
    pumpFiltrationCost +
    pumpChildrenSlideCost +
    pumpJacuzziCost +
    underWaterLightCost
).toFixed(2);

console.log("====================================================");
console.log(
  `ИТОГО: "Электрозатраты за 1 час активной эксплуатации частного бассейна составляют ${totalCostsPerHour} рублей.`
);
console.log("====================================================");
console.log("");
console.log(
  "----------- Затраты эл/энергии на вечерний отдых в сауне и бассейне -----------------"
);
console.log("");
console.log(electroSauna.getCost());
console.log(backFlow.getCost());
console.log(pumpFiltration.getCost());
console.log(pumpChildrenSlide.getCost());
console.log(pumpJacuzzi.getCost());
console.log(underWaterLight.getCost());

console.log(
  "______________________________________________________________________________________"
);
console.log("");

const electroSaunaCostForSession = +electroSauna.getCost();
const backFlowCostForSession = +backFlow.getCost();
const pumpFiltrationCostForSession = +pumpFiltration.getCost();
const pumpChildrenSlideCostForSession = +pumpChildrenSlide.getCost();
const pumpJacuzziCostForSession = +pumpJacuzzi.getCost();
const underWaterLightCostForSession = +underWaterLight.getCost();

const totalCostsForSession =
  electroSaunaCostForSession +
  backFlowCostForSession +
  pumpFiltrationCostForSession +
  pumpChildrenSlideCostForSession +
  pumpJacuzziCostForSession +
  underWaterLightCostForSession;

console.log(
  "======================================================================================="
);
console.log(
  `ИТОГО: "Электрозатраты за один сеанс пользования сауны и бассейна составили ${totalCostsForSession} руб.`
);
console.log(
  "======================================================================================="
);
