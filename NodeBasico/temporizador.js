const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * * * * *", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1!");
}, 20*1000);//20 segundos

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1,5)]//Segunda a Sexta
rule.hour = 21 //na 21° hora
rule.second = 30 //no 30° segundo

const tarefa2 = schedule.scheduleJob(rule, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})