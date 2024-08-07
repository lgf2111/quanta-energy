var appliance = ""
var hours = ""
var day_to_year = 365
var cost_per_kilowatt = 0.0003

function calculate(television, fridge, air_conditioner, washing_machine, hours) {
    var total_amount, total_energy;
    television = television.watts * hours["television"];
    fridge = fridge.watts * hours["fridge"];
    air_conditioner = air_conditioner.watts * hours["air_conditioner"];
    washing_machine = washing_machine.watts * hours["washing_machine"];
    total_energy = television + fridge + air_conditioner + washing_machine;
    total_energy = total_energy / 1000;
    total_amount = total_energy * 0.3;
    return [total_energy, total_amount];
  }

  function recommend(appliance, hours) {
    var amount, price, remark, time, watt;
  
    function calculate_savables(hours, given_watt) {
      var cost_per_kilowatt, day_to_year;
      day_to_year = 365;
      cost_per_kilowatt = 0.0003;
      amount = hours * day_to_year;
      watt = amount * given_watt;
      price = round(watt * cost_per_kilowatt, 2);
      return [hours, amount, watt, price];
    }
  
    remark = "";
  
    if (appliance.name === "Television") {
      for (var limit = 4, _pj_a = 0; limit < _pj_a; limit += -2) {
        if (hours > limit) {
          remark = `Limit Television to ${limit} hours`;
          [time, amount, watt, price] = calculate_savables(limit, appliance.watts);
          break;
        }
      }
  
      if (!remark) {
        remark = "Good Job!";
        [time, amount, watt, price] = calculate_savables(0, appliance.watts);
      }
    } else {
      if (appliance.name === "Fridge") {
        if (hours > 0) {
          remark = "Changing to a more efficient brand or reducing the temperature can reduce its energy consumption";
          [time, amount, watt, price] = calculate_savables(hours, appliance.watts);
        }
      } else {
        if (appliance.name === "Air-Conditioner") {
          for (var limit = 10, _pj_a = 0; limit < _pj_a; limit += -2) {
            if (hours > limit) {
              remark = `Limit Air-Conditioner to ${limit} hours`;
              [time, amount, watt, price] = calculate_savables(limit, appliance.watts);
              break;
            }
          }
  
          if (!remark) {
            remark = `Good Job!`;
            [time, amount, watt, price] = calculate_savables(limit, appliance.watts);
          }
        } else {
          if (appliance.name === "Washing Machine") {
            for (var limit = 3, _pj_a = 0; limit < _pj_a; limit += -1) {
              if (limit === 1) {
                remark = "Decrese the time spent washing per load";
                [time, amount, watt, price] = calculate_savables(limit, 50);
              }
  
              if (hours > limit) {
                remark = `Decrease the number of times of washing to ${limit}`;
                [time, amount, watt, price] = calculate_savables(limit, appliance.watts);
              }
  
              break;
            }
  
            if (!remark) {
              remark = `Good Job!`;
              [time, amount, watt, price] = calculate_savables(limit, appliance.watts);
            }
          }
        }
      }
    }
  
    return {
      "appliance": appliance.name,
      "brand": appliance.brand.name,
      "time": time,
      "amount": amount,
      "watt": watt,
      "price": price
    };
  }
  
  function cal1(x) {
    var height;
    height = x * 100 + 100;
  }
  
  function cal2(x) {
    var width;
    width = x * 75 + 125;
  }
  
  var saveamt, saveprice, savetime, savewatt, usage, watt;
  usage = 0;
  watt = 100;
  
  if (usage > 4) {
    console.log("limit tv to 4 hours");
    savetime = usage - 4;
    saveamt = savetime * 365;
    savewatt = saveamt * watt;
    saveprice = savewatt * 0.3;
  } else {
    if (usage > 2) {
      console.log("limit usage to 2 hours");
      savetime = usage - 2;
      saveamt = savetime * 365;
      savewatt = saveamt * watt;
      saveprice = savewatt * 0.3;
    } else {
      if (usage < 2) {
        console.log("Great Job!");
      }
    }
  }
  
  if (usage !== 0) {
    console.log("Changing to a more efficient brand or reducing the temperature can reduce its energy consumption");
    saveamt = savetime * 365;
    savewatt = saveamt * 30;
    saveprice = savewatt * 0.3;
  }
  
  if (usage > 10) {
    console.log("limit aircon to 8 hours");
    savetime = usage - 10;
    saveamt = savetime * 365;
    savewatt = saveamt * watt;
    saveprice = savewatt * 0.3;
  } else {
    if (usage > 8) {
      console.log("limit aircon to 6 hours");
      savetime = usage - 6;
      saveamt = savetime * 365;
      saveprice = saveamt * 0.3;
    } else {
      if (usage > 6) {
        console.log("limit aircon to 4 hours");
        savetime = usage - 6;
        saveamt = savetime * 365;
        savewatt = saveamt * watt;
        saveprice = savewatt * 0.3;
      } else {
        if (usage > 4) {
          console.log("limit aircon to 2 hours");
          saveamt = savetime * 365;
          savewatt = saveamt * 100;
          saveprice = savewatt * 0.3;
        } else {
          if (usage > 2) {
            console.log("limit aircon to 2 hours");
            saveamt = savetime * 365;
            savewatt = saveamt * 100;
            saveprice = savewatt * 0.3;
          } else {
            if (usage <= 2) {
              console.log("Good Job!");
            }
          }
        }
      }
    }
  }
  
  if (usage > 3) {
    console.log("decrease the number of times of washing to 3");
    savetime = usage - 3;
    saveamt = savetime * 365;
    savewatt = saveamt * watt;
    saveprice = savewatt * 0.3;
  }
  
  if (usage > 2) {
    console.log("decrease the number of times of washing to 2");
    savetime = usage - 2;
    saveamt = savetime * 365;
    savewatt = saveamt * watt;
    saveprice = savewatt * 0.3;
  }
  
  if (usage <= 2) {
    console.log("decrease the time spent washing");
    saveamt = savetime * 365;
    savewatt = saveamt * 50;
    saveprice = savewatt * 0.3;
  }
  