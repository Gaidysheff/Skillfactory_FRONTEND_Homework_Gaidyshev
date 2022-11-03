function ElectroDevice(power, timeOn, timeOff) {
  this.name = "",
  this.voltage = 220,
  this.electicityTariff = 3.81, // RUB 1.82 night tariff
  this.power = power, // kWt
  this.timeOn = timeOn,
  this.timeOff = timeOff,
  this.getElectroCost = function () {
    let electroCostHour = power * this.electicityTariff;
    electroCostHour = Number(electroCostHour.toFixed(2));
    let electroCostMinute = electroCostHour / 60;
    electroCostMinute = Number(electroCostMinute.toFixed(2));
    console.log(
      `На эксплуатацию "${this.name}" затрачивается ${electroCostHour} рублей за час работы или ${electroCostMinute} рублей в минуту`
    );
    return electroCostHour;
  };
  this.getCost = function () {
    if (this.timeOn && this.timeOff) {
      let getDate = (string) =>
        new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]);
      let difference = getDate(timeOff) - getDate(timeOn);
      let differenceResult, hours;
      if (difference > 0) {
        differenceResult = difference;
        hours = Number(differenceResult / 3600000).toFixed(2);
      } else {
        differenceResult = Math.abs(getDate(timeOn) - getDate(timeOff));
        hours = Number(24 - differenceResult / 3600000).toFixed(2);
      }
      let totalElectroCost = Number(
        hours * power * this.electicityTariff
      ).toFixed(2);
      console.log(
        `"${this.name}" проработал/a/о ${hours} часа/часов. В результате затрачено электроэнергии на ${totalElectroCost} руб.`
      );
      return totalElectroCost;
    } else if (this.timeOn && !this.timeOff) {
      console.log(
        `"${this.name}" был/а/о включен/а/о в ${timeOn} и до сих пор работает`
      );
      return 0;
    } else {
      console.log(`"${this.name}" не работал/а/о`);
      return 0;
    }
  };
}

const electroSauna = new ElectroDevice(9, "20:00", "21:30");
electroSauna.name = "Электросауна";
electroSauna.brandname = "Harvia";

console.log(electroSauna.getCost());

// console.log("");
// const electroSaunaCostHour = electroSauna.getCost();
// console.log("");
// console.log(electroSaunaCostHour);
