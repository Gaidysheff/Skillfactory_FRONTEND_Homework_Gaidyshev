class ElectroDeviceBase {
  constructor(nameDevice, power) {
    this.nameDevice = nameDevice || "Электроприбор";
    this.voltage = 220,
    this.electricityTariff = 3.81, // RUB 1.82 night tariff
    this.power = power;
  }

  static comparePower(deviceA, deviceB) {
    return deviceA.power - deviceB.power;
  }
}

class ElectricityPerHour extends ElectroDeviceBase {
  constructor(price, nameDevice, power, electricityTariff) {
    super(nameDevice, power, electricityTariff);
    this.price = price;
  }

  getElectroCost() {
    let electroCostHour = this.power * this.electricityTariff;
    electroCostHour = Number(electroCostHour.toFixed(2));
    let electroCostMinute = electroCostHour / 60;
    electroCostMinute = Number(electroCostMinute.toFixed(2));
    console.log(`На эксплуатацию "${this.nameDevice}" затрачивается ${electroCostHour} рублей за час работы или ${electroCostMinute} рублей в минуту`);
    return electroCostHour;
  }

  static comparePrice(deviceA, deviceB) {
    return deviceA.price - deviceB.price;
  }
}

class ElectricityPerSession extends ElectricityPerHour {
  constructor(brandname, timeOn, timeOff, nameDevice, power, electricityTariff) {
    super(nameDevice, power, electricityTariff);
    this.brandname = brandname;
    this.timeOn = timeOn;
    this.timeOff = timeOff;
  }

  static developer = "author/developer - Eugene Gaidyshev";

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
      console.log(`"${this.nameDevice}" проработал/a/о ${hours} часа/часов. В результате затрачено электроэнергии на ${totalElectroCost} руб.`);
      return totalElectroCost;

    } else if (this.timeOn && !this.timeOff) {
      console.log(`"${this.nameDevice}" был/а/о включен/а/о в ${this.timeOn} и до сих пор работает`);
      return 0;

    } else {
      console.log(`"${this.nameDevice}" не работал/а/о`);
      return 0;
    }
  }
}

// ================= Работа статического метода (comparePower) Базового класса ============================================

console.log("____________Сортировка по мощности___________");
const devices = [
  new ElectroDeviceBase("Электросауна", 9),
  new ElectroDeviceBase("Противоток", 4),
  new ElectroDeviceBase("Насос фильтрации", 0.55),
  new ElectroDeviceBase("Насос детской горки", 0.45),
  new ElectroDeviceBase("Насос джакузи", 2.2),
  new ElectroDeviceBase("Подводное освещение", 0.3),
];

console.log(devices.sort(ElectroDeviceBase.comparePower));

// ====================== Работа собственного метода (getElectroCost) из дочернего класса =====================================

const electroSaunaPerHour = new ElectricityPerHour("Harvia", "Электросауна", 9);
const backFlowPerHour = new ElectricityPerHour("Pahlen", "Противоток", 4);
const pumpFiltrationPerHour = new ElectricityPerHour("АMERICA", "Насос фильтрации", 0.55);
const pumpChildrenSlidePerHour = new ElectricityPerHour("Kripson Ninfa NK-33", "Насос детской горки", 0.45);
const pumpJacuzziPerHour = new ElectricityPerHour("Iberspa Jet 3 Steel", "Насос джакузи", 2.2);
const underWaterLightPerHour = new ElectricityPerHour("Pahlen", "Подводное освещение", 0.3);

const electroSaunaCost = electroSaunaPerHour.getElectroCost();
const backFlowCost = backFlowPerHour.getElectroCost();
const pumpFiltrationCost = pumpFiltrationPerHour.getElectroCost();
const pumpChildrenSlideCost = pumpChildrenSlidePerHour.getElectroCost();
const pumpJacuzziCost = pumpJacuzziPerHour.getElectroCost();
const underWaterLightCost = underWaterLightPerHour.getElectroCost();

console.log("____________Затраты приборов за 1 час работы___________");
console.log("");
console.log(electroSaunaPerHour, backFlowCost, pumpFiltrationCost, pumpChildrenSlideCost, pumpJacuzziCost, underWaterLightCost);

// ================= Работа статического метода (comparePrice) дочернего класса ============================================

console.log("____________Сортировка по Цене___________");
const devicesPerBrand = [
  new ElectricityPerHour(57721, "Электросауна", 9),
  new ElectricityPerHour(433570, "Противоток", 4),
  new ElectricityPerHour(22017, "Насос фильтрации", 0.55),
  new ElectricityPerHour(21415, "Насос детской горки", 0.45),
  new ElectricityPerHour(228772, "Насос джакузи", 2.2),
  new ElectricityPerHour(10700, "Подводное освещение", 0.3),
];
console.log(devicesPerBrand.sort(ElectricityPerHour.comparePrice));

// ================= Работа статического свойства (developer) из внучатого класса ============================

console.log("============================================================");
console.log("");
console.log(ElectricityPerSession.developer);
console.log("");
console.log("============================================================");
console.log("");

// ================= Работа собственного метода (getCost) из внучатого класса ============================================

console.log(
  "----------- Затраты эл/энергии на вечерний отдых в сауне и бассейне -----------------"
);
console.log("");

// параметры (brandname, timeOn, timeOff, price, nameDevice, power)

const electroSauna = new ElectricityPerSession("Harvia", "21:00", "00:35", 57721, "Электросауна", 9);
const backFlow = new ElectricityPerSession("Pahlen", "23:37", "00:08", 433570, "Противоток", 4);
const pumpFiltration = new ElectricityPerSession("АMERICA", "23:00", "", 22017, "Насос фильтрации", 0.55);
const pumpChildrenSlide = new ElectricityPerSession("Kripson Ninfa NK-33", "", "", 21415, "Насос детской горки", 0.45);
const pumpJacuzzi = new ElectricityPerSession("Iberspa Jet 3 Steel", "22:00", "23:55", 228772, "Насос джакузи", 2.2);
const underWaterLight = new ElectricityPerSession("Pahlen", "22:00", "00:35", 10700, "Подводное освещение", 0.3);

const electroSaunaCostPerSession = electroSauna.getCost();
console.log(electroSaunaCostPerSession);

const backFlowCostPerSession = backFlow.getCost();
console.log(backFlowCostPerSession);

const pumpFiltrationCostPerSession = pumpFiltration.getCost();
console.log(pumpFiltrationCostPerSession);

const pumpChildrenSlideCostPerSession = pumpChildrenSlide.getCost();
console.log(pumpChildrenSlideCostPerSession);

const pumpJacuzziCostPerSession = pumpJacuzzi.getCost();
console.log(pumpJacuzziCostPerSession);

const underWaterLightCostPerSession = underWaterLight.getCost();
console.log(underWaterLightCostPerSession);

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
