var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  //1. Australia's Public Holidays 
  var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/AU','https://date.nager.at/api/v3/publicholidays/2022/AU');

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log(data)
    //2021 Public Holidays
    [{"date":"2021-01-01","localName":"New Year's Day","name":"New Year's Day","countryCode":"AU","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-01-26","localName":"Australia Day","name":"Australia Day","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-03-01","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-WA"],"launchYear":null,
    "types":["Public"]},{"date":"2021-03-08","localName":"Canberra Day","name":"Canberra Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT"],"launchYear":null,
    "types":["Public"]},{"date":"2021-03-08","localName":"March Public Holiday","name":"March Public Holiday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-SA"],"launchYear":null,
    "types":["Public"]},{"date":"2021-03-08","localName":"Eight Hours Day","name":"Eight Hours Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-TAS"],"launchYear":null,
    "types":["Public"]},{"date":"2021-03-08","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-VIC"],"launchYear":null,
    "types":["Public"]},{"date":"2021-04-02","localName":"Good Friday","name":"Good Friday","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-04-03","localName":"Easter Eve","name":"Holy Saturday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-NT","AUS-QLD","AUS-SA","AUS-VIC"],"launchYear":null,
    "types":["Public"]},{"date":"2021-04-04","localName":"Easter Sunday","name":"Easter Sunday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-VIC"],"launchYear":null,"types":["Public"]},{"date":"2021-04-05","localName":"Easter Monday","name":"Easter Monday","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-04-25","localName":"Anzac Day","name":"Anzac Day","countryCode":"AU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-05-03","localName":"May Day","name":"May Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-NT"],"launchYear":null,
    "types":["Public"]},{"date":"2021-05-03","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-QLD"],"launchYear":null,
    "types":["Public"]},{"date":"2021-05-31","localName":"Reconciliation Day","name":"Reconciliation Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT"],"launchYear":2018,
    "types":["Public"]},{"date":"2021-06-07","localName":"Western Australia Day","name":"Western Australia Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-WA"],"launchYear":null,
    "types":["Public"]},{"date":"2021-06-14","localName":"Queen's Birthday","name":"Queen's Birthday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-NT","AUS-SA","AUS-TAS","AUS-VIC"],"launchYear":null,
    "types":["Public"]},{"date":"2021-08-02","localName":"Picnic Day","name":"Picnic Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-NT"],"launchYear":null,"types":["Public"]},{"date":"2021-10-04","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-SA"],"launchYear":null,
    "types":["Public"]},{"date":"2021-12-25","localName":"Christmas Day","name":"Christmas Day","countryCode":"AU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-12-27","localName":"Boxing Day","name":"St. Stephen's Day","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
    
    //2022 Public Holidays
    [{"date":"2022-01-01","localName":"New Year's Day","name":"New Year's Day","countryCode":"AU","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-01-26","localName":"Australia Day","name":"Australia Day","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-03-07","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-WA"],"launchYear":null,
    "types":["Public"]},{"date":"2022-03-14","localName":"Canberra Day","name":"Canberra Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT"],"launchYear":null,
    "types":["Public"]},{"date":"2022-03-14","localName":"March Public Holiday","name":"March Public Holiday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-SA"],"launchYear":null,
    "types":["Public"]},{"date":"2022-03-14","localName":"Eight Hours Day","name":"Eight Hours Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-TAS"],"launchYear":null,
    "types":["Public"]},{"date":"2022-03-14","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-VIC"],"launchYear":null,
    "types":["Public"]},{"date":"2022-04-15","localName":"Good Friday","name":"Good Friday","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-04-16","localName":"Easter Eve","name":"Holy Saturday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-NT","AUS-QLD","AUS-SA","AUS-VIC"],"launchYear":null,
    "types":["Public"]},{"date":"2022-04-17","localName":"Easter Sunday","name":"Easter Sunday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-VIC"],"launchYear":null,
    "types":["Public"]},{"date":"2022-04-18","localName":"Easter Monday","name":"Easter Monday","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-04-25","localName":"Anzac Day","name":"Anzac Day","countryCode":"AU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-05-02","localName":"May Day","name":"May Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-NT"],"launchYear":null,
    "types":["Public"]},{"date":"2022-05-02","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-QLD"],"launchYear":null,"types":["Public"]},{"date":"2022-05-30","localName":"Reconciliation Day","name":"Reconciliation Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT"],"launchYear":2018,
    "types":["Public"]},{"date":"2022-06-06","localName":"Western Australia Day","name":"Western Australia Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-WA"],"launchYear":null,
    "types":["Public"]},{"date":"2022-06-13","localName":"Queen's Birthday","name":"Queen's Birthday","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-NT","AUS-SA","AUS-TAS","AUS-VIC"],"launchYear":null,
    "types":["Public"]},{"date":"2022-08-01","localName":"Picnic Day","name":"Picnic Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-NT"],"launchYear":null,
    "types":["Public"]},{"date":"2022-10-03","localName":"Labour Day","name":"Labour Day","countryCode":"AU","fixed":false,"global":false,"counties":["AUS-ACT","AUS-NSW","AUS-SA"],"launchYear":null,
    "types":["Public"]},{"date":"2022-12-25","localName":"Christmas Day","name":"Christmas Day","countryCode":"AU","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-12-26","localName":"Boxing Day","name":"St. Stephen's Day","countryCode":"AU","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
    
    // 2. China's Public Holidays //
    var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/CN','https://date.nager.at/api/v3/publicholidays/2022/CN');

     fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log(data)
    //2021 Public Holidays
    [{"date":"2021-01-01","localName":"元旦","name":"New Year's Day","countryCode":"CN","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-02-12","localName":"春节","name":"Chinese New Year (Spring Festival)","countryCode":"CN","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-04-05","localName":"清明节","name":"Qingming Festival (Tomb-Sweeping Day)","countryCode":"CN","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-05-01","localName":"劳动节","name":"Labour Day","countryCode":"CN","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-06-14","localName":"端午节","name":"Dragon Boat Festival","countryCode":"CN","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-09-21","localName":"中秋节","name":"Mid-Autumn Festival","countryCode":"CN","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-10-01","localName":"国庆节","name":"National Day","countryCode":"CN","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

    // 2022 Public Holidays
    [{"date":"2022-01-01", "localName":"元旦","name":"New Year's Day","countryCode":"CN","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-02-01", "localName":"春节","name":"Chinese New Year (Spring Festival)", "countryCode":"CN","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]}, {"date":"2022-04-05", "localName":"清明节","name":"Qingming Festival (Tomb-Sweeping Day)","countryCode":"CN","fixed":true,"global":true, "counties":null,"launchYear":null,
    "types": ["Public"]},{"date":"2022-05-01", "localName":"劳动节", "name":"Labour Day", "countryCode":"CN","fixed":true,"global":true,"counties":null, "launchYear":null,
    "types":["Public"]},{"date":"2022-06-03","localName":"端午节","name":"Dragon Boat Festival","countryCode":"CN","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types": ["Public"]},{"date":"2022-09-10","localName":"中秋节","name":"Mid-Autumn Festival","countryCode":"CN","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-10-01","localName":"国庆节","name":"National Day","countryCode":"CN","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
    
    //3. Japan's Public Holidays 
    var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/JP','https://date.nager.at/api/v3/publicholidays/2022/JP');

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
    //2021 Public Holidays
    [{"date":"2021-01-01","localName":"元日","name":"New Year's Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-01-11","localName":"成人の日","name":"Coming of Age Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-02-11","localName":"建国記念の日","name":"Foundation Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-02-23","localName":"天皇誕生日","name":"The Emperor's Birthday","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-03-20","localName":"春分の日","name":"Vernal Equinox Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-04-29","localName":"昭和の日","name":"Shōwa Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-05-03","localName":"憲法記念日","name":"Constitution Memorial Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-05-04","localName":"みどりの日","name":"Greenery Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-05-05","localName":"こどもの日","name":"Children's Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-07-19","localName":"海の日","name":"Marine Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-08-11","localName":"山の日","name":"Mountain Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-09-20","localName":"敬老の日","name":"Respect for the Aged Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-09-23","localName":"秋分の日","name":"Autumnal Equinox Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-10-11","localName":"体育の日","name":"Health and Sports Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-11-03","localName":"文化の日","name":"Culture Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-11-23","localName":"勤労感謝の日","name":"Labour Thanksgiving Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

    // 2022 Public Holidays
    [{"date":"2022-01-01","localName":"元日","name":"New Year's Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-01-10","localName":"成人の日","name":"Coming of Age Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-02-11","localName":"建国記念の日","name":"Foundation Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-02-23","localName":"天皇誕生日","name":"The Emperor's Birthday","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-03-21","localName":"春分の日","name":"Vernal Equinox Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-04-29","localName":"昭和の日","name":"Shōwa Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-05-03","localName":"憲法記念日","name":"Constitution Memorial Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-05-04","localName":"みどりの日","name":"Greenery Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-05-05","localName":"こどもの日","name":"Children's Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-07-18","localName":"海の日","name":"Marine Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-08-11","localName":"山の日","name":"Mountain Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-09-19","localName":"敬老の日","name":"Respect for the Aged Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-09-23","localName":"秋分の日","name":"Autumnal Equinox Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-10-10","localName":"体育の日","name":"Health and Sports Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-11-03","localName":"文化の日","name":"Culture Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-11-23","localName":"勤労感謝の日","name":"Labour Thanksgiving Day","countryCode":"JP","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
   
    //4. France's Public Holidays 
    var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/FR','https://date.nager.at/api/v3/publicholidays/2022/FR');

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
    //2021 Public Holidays
    [{"date":"2021-01-01","localName":"Jour de l'an","name":"New Year's Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":1967,
    "types":["Public"]},{"date":"2021-04-02","localName":"Vendredi saint","name":"Good Friday","countryCode":"FR","fixed":false,"global":false,"counties":["FR-A","FR-57"],"launchYear":null,
    "types":["Public"]},{"date":"2021-04-05","localName":"Lundi de Pâques","name":"Easter Monday","countryCode":"FR","fixed":false,"global":true,"counties":null,"launchYear":1642,
    "types":["Public"]},{"date":"2021-05-01","localName":"Fête du premier mai","name":"Labour Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-05-08","localName":"Fête de la Victoire","name":"Victory in Europe Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-05-13","localName":"Jour de l'Ascension","name":"Ascension Day","countryCode":"FR","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-05-22","localName":"Abolition de l'esclavage","name":"Abolition of Slavery","countryCode":"FR","fixed":true,"global":false,"counties":["FR-MQ"],"launchYear":null,
    "types":["Public"]},{"date":"2021-05-24","localName":"Lundi de Pentecôte","name":"Whit Monday","countryCode":"FR","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-05-27","localName":"Abolition of Slavery","name":"Abolition de l'esclavage","countryCode":"FR","fixed":true,"global":false,"counties":["FR-GP","FR-MF","FR-BL"],"launchYear":null,
    "types":["Public"]},{"date":"2021-07-14","localName":"Fête nationale","name":"Bastille Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-08-15","localName":"L'Assomption de Marie","name":"Assumption Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-11-01","localName":"La Toussaint","name":"All Saints' Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-11-11","localName":"Armistice de 1918","name":"Armistice Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-12-25","localName":"Noël","name":"Christmas Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2021-12-26","localName":"Saint-Étienne","name":"St. Stephen's Day","countryCode":"FR","fixed":true,"global":false,"counties":["FR-A","FR-57"],"launchYear":null,"types":["Public"]}]

    // 2022 Public Holidays
    [{"date":"2022-01-01","localName":"Jour de l'an","name":"New Year's Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":1967,
    "types":["Public"]},{"date":"2022-04-15","localName":"Vendredi saint","name":"Good Friday","countryCode":"FR","fixed":false,"global":false,"counties":["FR-A","FR-57"],"launchYear":null,
    "types":["Public"]},{"date":"2022-04-18","localName":"Lundi de Pâques","name":"Easter Monday","countryCode":"FR","fixed":false,"global":true,"counties":null,"launchYear":1642,
    "types":["Public"]},{"date":"2022-05-01","localName":"Fête du premier mai","name":"Labour Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-05-08","localName":"Fête de la Victoire","name":"Victory in Europe Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-05-22","localName":"Abolition de l'esclavage","name":"Abolition of Slavery","countryCode":"FR","fixed":true,"global":false,"counties":["FR-MQ"],"launchYear":null,
    "types":["Public"]},{"date":"2022-05-26","localName":"Jour de l'Ascension","name":"Ascension Day","countryCode":"FR","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-05-27","localName":"Abolition of Slavery","name":"Abolition de l'esclavage","countryCode":"FR","fixed":true,"global":false,"counties":["FR-GP","FR-MF","FR-BL"],"launchYear":null,
    "types":["Public"]},{"date":"2022-06-06","localName":"Lundi de Pentecôte","name":"Whit Monday","countryCode":"FR","fixed":false,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-07-14","localName":"Fête nationale","name":"Bastille Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-08-15","localName":"L'Assomption de Marie","name":"Assumption Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-11-01","localName":"La Toussaint","name":"All Saints' Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-11-11","localName":"Armistice de 1918","name":"Armistice Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-12-25","localName":"Noël","name":"Christmas Day","countryCode":"FR","fixed":true,"global":true,"counties":null,"launchYear":null,
    "types":["Public"]},{"date":"2022-12-26","localName":"Saint-Étienne","name":"St. Stephen's Day","countryCode":"FR","fixed":true,"global":false,"counties":["FR-A","FR-57"],"launchYear":null,"types":["Public"]}]
    
    //5. Germany's Public Holidays 
    var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/DE','https://date.nager.at/api/v3/publicholidays/2022/DE');

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
     //2021 Public Holidays
      [{"date":"2021-01-01","localName":"Neujahr","name":"New Year's Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":1967,
      "types":["Public"]},{"date":"2021-01-06","localName":"Heilige Drei Könige","name":"Epiphany","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BW","DE-BY","DE-ST"],"launchYear":1967,
      "types":["Public"]},{"date":"2021-03-08","localName":"Internationaler Frauentag","name":"International Women's Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BE"],"launchYear":2019,
      "types":["Public"]},{"date":"2021-04-02","localName":"Karfreitag","name":"Good Friday","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-04","localName":"Ostersonntag","name":"Easter Sunday","countryCode":"DE","fixed":false,"global":false,"counties":["DE-BB","DE-HE"],"launchYear":null,
      "types":["Public"]},{"date":"2021-04-05","localName":"Ostermontag","name":"Easter Monday","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":1642,
      "types":["Public"]},{"date":"2021-05-01","localName":"Tag der Arbeit","name":"Labour Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-13","localName":"Christi Himmelfahrt","name":"Ascension Day","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-23","localName":"Pfingstsonntag","name":"Pentecost","countryCode":"DE","fixed":false,"global":false,"counties":["DE-BB","DE-HE"],"launchYear":null,
      "types":["Public"]},{"date":"2021-05-24","localName":"Pfingstmontag","name":"Whit Monday","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-06-03","localName":"Fronleichnam","name":"Corpus Christi","countryCode":"DE","fixed":false,"global":false,"counties":["DE-BW","DE-BY","DE-HE","DE-NW","DE-RP","DE-SL"],"launchYear":null,
      "types":["Public"]},{"date":"2021-08-15","localName":"Mariä Himmelfahrt","name":"Assumption Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-SL"],"launchYear":null,
      "types":["Public"]},{"date":"2021-09-20","localName":"Weltkindertag","name":"World Children's Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-TH"],"launchYear":2019,
      "types":["Public"]},{"date":"2021-10-03","localName":"Tag der Deutschen Einheit","name":"German Unity Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-10-31","localName":"Reformationstag","name":"Reformation Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BB","DE-MV","DE-SN","DE-ST","DE-TH","DE-HB","DE-HH","DE-NI","DE-SH"],"launchYear":null,
      "types":["Public"]},{"date":"2021-11-01","localName":"Allerheiligen","name":"All Saints' Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BW","DE-BY","DE-NW","DE-RP","DE-SL"],"launchYear":null,"types":["Public"]},{"date":"2021-11-17","localName":"Buß- und Bettag","name":"Repentance and Prayer Day","countryCode":"DE","fixed":false,"global":false,"counties":["DE-SN"],"launchYear":null,
      "types":["Public"]},{"date":"2021-12-25","localName":"Erster Weihnachtstag","name":"Christmas Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-12-26","localName":"Zweiter Weihnachtstag","name":"St. Stephen's Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]  

      // 2022 Public Holidays
      [{"date":"2022-01-01","localName":"Neujahr","name":"New Year's Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":1967,
      "types":["Public"]},{"date":"2022-01-06","localName":"Heilige Drei Könige","name":"Epiphany","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BW","DE-BY","DE-ST"],"launchYear":1967,
      "types":["Public"]},{"date":"2022-03-08","localName":"Internationaler Frauentag","name":"International Women's Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BE"],"launchYear":2019,
      "types":["Public"]},{"date":"2022-04-15","localName":"Karfreitag","name":"Good Friday","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-17","localName":"Ostersonntag","name":"Easter Sunday","countryCode":"DE","fixed":false,"global":false,"counties":["DE-BB","DE-HE"],"launchYear":null,
      "types":["Public"]},{"date":"2022-04-18","localName":"Ostermontag","name":"Easter Monday","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":1642,
      "types":["Public"]},{"date":"2022-05-01","localName":"Tag der Arbeit","name":"Labour Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-05-26","localName":"Christi Himmelfahrt","name":"Ascension Day","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-06-05","localName":"Pfingstsonntag","name":"Pentecost","countryCode":"DE","fixed":false,"global":false,"counties":["DE-BB","DE-HE"],"launchYear":null,
      "types":["Public"]},{"date":"2022-06-06","localName":"Pfingstmontag","name":"Whit Monday","countryCode":"DE","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-06-16","localName":"Fronleichnam","name":"Corpus Christi","countryCode":"DE","fixed":false,"global":false,"counties":["DE-BW","DE-BY","DE-HE","DE-NW","DE-RP","DE-SL"],"launchYear":null,
      "types":["Public"]},{"date":"2022-08-15","localName":"Mariä Himmelfahrt","name":"Assumption Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-SL"],"launchYear":null,
      "types":["Public"]},{"date":"2022-09-20","localName":"Weltkindertag","name":"World Children's Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-TH"],"launchYear":2019,
      "types":["Public"]},{"date":"2022-10-03","localName":"Tag der Deutschen Einheit","name":"German Unity Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-10-31","localName":"Reformationstag","name":"Reformation Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BB","DE-MV","DE-SN","DE-ST","DE-TH","DE-HB","DE-HH","DE-NI","DE-SH"],"launchYear":null,
      "types":["Public"]},{"date":"2022-11-01","localName":"Allerheiligen","name":"All Saints' Day","countryCode":"DE","fixed":true,"global":false,"counties":["DE-BW","DE-BY","DE-NW","DE-RP","DE-SL"],"launchYear":null,"types":["Public"]},{"date":"2022-11-16","localName":"Buß- und Bettag","name":"Repentance and Prayer Day","countryCode":"DE","fixed":false,"global":false,"counties":["DE-SN"],"launchYear":null,
      "types":["Public"]},{"date":"2022-12-25","localName":"Erster Weihnachtstag","name":"Christmas Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-12-26","localName":"Zweiter Weihnachtstag","name":"St. Stephen's Day","countryCode":"DE","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
    
     //6. Italy's Public Holidays 
     var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/IT','https://date.nager.at/api/v3/publicholidays/2022/IT');

      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
        console.log(data)
       //2021 Public Holidays
          [{"date":"2021-01-01","localName":"Capodanno","name":"New Year's Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":1967,"types":["Public"]},{"date":"2021-01-06","localName":"Epifania","name":"Epiphany","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-04-04","localName":"Pasqua","name":"Easter Sunday","countryCode":"IT","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-04-05","localName":"Lunedì dell'Angelo","name":"Easter Monday","countryCode":"IT","fixed":false,"global":true,"counties":null,"launchYear":1642,"types":["Public"]},{"date":"2021-04-25","localName":"Festa della Liberazione","name":"Liberation Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-05-01","localName":"Festa del Lavoro","name":"International Workers Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-06-02","localName":"Festa della Repubblica","name":"Republic Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-08-15","localName":"Ferragosto o Assunzione","name":"Assumption Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-11-01","localName":"Tutti i santi","name":"All Saints Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-12-08","localName":"Immacolata Concezione","name":"Immaculate Conception","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-12-25","localName":"Natale","name":"Christmas Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-12-26","localName":"Santo Stefano","name":"St. Stephen's Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

       // 2022 Public Holidays
          [{"date":"2022-01-01","localName":"Capodanno","name":"New Year's Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":1967,"types":["Public"]},{"date":"2022-01-06","localName":"Epifania","name":"Epiphany","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-04-17","localName":"Pasqua","name":"Easter Sunday","countryCode":"IT","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-04-18","localName":"Lunedì dell'Angelo","name":"Easter Monday","countryCode":"IT","fixed":false,"global":true,"counties":null,"launchYear":1642,"types":["Public"]},{"date":"2022-04-25","localName":"Festa della Liberazione","name":"Liberation Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-05-01","localName":"Festa del Lavoro","name":"International Workers Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-06-02","localName":"Festa della Repubblica","name":"Republic Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-08-15","localName":"Ferragosto o Assunzione","name":"Assumption Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-11-01","localName":"Tutti i santi","name":"All Saints Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-12-08","localName":"Immacolata Concezione","name":"Immaculate Conception","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-12-25","localName":"Natale","name":"Christmas Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-12-26","localName":"Santo Stefano","name":"St. Stephen's Day","countryCode":"IT","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
      
     //7. Russia 's Public Holidays 
      var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/RU','https://date.nager.at/api/v3/publicholidays/2022/RU');

      fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
      //2021 Public Holidays
        [{"date":"2021-01-01","localName":"Новый год","name":"New Year's Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-01-02","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-01-03","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-01-04","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-01-05","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-01-06","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-01-07","localName":"Рождество Христово","name":"Orthodox Christmas Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-02-23","localName":"День защитника Отечества","name":"Defender of the Fatherland Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":1918,"types":["Public"]},{"date":"2021-03-08","localName":"Международный женский день","name":"International Women's Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":1913,"types":["Public"]},{"date":"2021-05-01","localName":"День труда","name":"Labour Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-05-09","localName":"День Победы","name":"Victory Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2021-06-12","localName":"День России","name":"Russia Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":2002,"types":["Public"]},{"date":"2021-11-04","localName":"День народного единства","name":"Unity Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":2005,"types":["Public"]}]

      //2022 Public Holidays
        [{"date":"2022-01-01","localName":"Новый год","name":"New Year's Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-01-02","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-01-03","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-01-04","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-01-05","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-01-06","localName":"Новогодние каникулы","name":"New Year holiday","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-01-07","localName":"Рождество Христово","name":"Orthodox Christmas Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-02-23","localName":"День защитника Отечества","name":"Defender of the Fatherland Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":1918,"types":["Public"]},{"date":"2022-03-08","localName":"Международный женский день","name":"International Women's Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":1913,"types":["Public"]},{"date":"2022-05-01","localName":"День труда","name":"Labour Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-05-09","localName":"День Победы","name":"Victory Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]},{"date":"2022-06-12","localName":"День России","name":"Russia Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":2002,"types":["Public"]},{"date":"2022-11-04","localName":"День народного единства","name":"Unity Day","countryCode":"RU","fixed":true,"global":true,"counties":null,"launchYear":2005,"types":["Public"]}]

    //8. United States's Public Holidays 
     var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/US','https://date.nager.at/api/v3/publicholidays/2022/US');

     fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
     //2021 Public Holidays
      [{"date":"2021-01-01","localName":"New Year's Day","name":"New Year's Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-01-18","localName":"Martin Luther King, Jr. Day","name":"Martin Luther King, Jr. Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-01-20","localName":"Inauguration Day","name":"Inauguration Day","countryCode":"US","fixed":true,"global":false,"counties":["US-DC","US-LA","US-MD","US-VA"],"launchYear":null,
      "types":["Public"]},{"date":"2021-02-15","localName":"Presidents Day","name":"Washington's Birthday","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-02","localName":"Good Friday","name":"Good Friday","countryCode":"US","fixed":false,"global":false,"counties":["US-CT","US-DE","US-HI","US-IN","US-KY","US-LA","US-NC","US-ND","US-NJ","US-TN"],"launchYear":null,
      "types":["Public"]},{"date":"2021-04-02","localName":"Good Friday","name":"Good Friday","countryCode":"US","fixed":false,"global":false,"counties":["US-TX"],"launchYear":null,
      "types":["Optional"]},{"date":"2021-05-31","localName":"Memorial Day","name":"Memorial Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-06-18","localName":"Juneteenth","name":"Juneteenth","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":2021,
      "types":["Public"]},{"date":"2021-07-05","localName":"Independence Day","name":"Independence Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-09-06","localName":"Labor Day","name":"Labour Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-10-11","localName":"Columbus Day","name":"Columbus Day","countryCode":"US","fixed":false,"global":false,"counties":["US-AL","US-AZ","US-CO","US-CT","US-DC","US-GA","US-ID","US-IL","US-IN","US-IA","US-KS","US-KY","US-LA","US-ME","US-MD","US-MA","US-MS","US-MO","US-MT","US-NE","US-NH","US-NJ","US-NM","US-NY","US-NC","US-OH","US-OK","US-PA","US-RI","US-SC","US-TN","US-UT","US-VA","US-WV"],"launchYear":null,
      "types":["Public"]},{"date":"2021-11-11","localName":"Veterans Day","name":"Veterans Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-11-25","localName":"Thanksgiving Day","name":"Thanksgiving Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":1863,
      "types":["Public"]},{"date":"2021-12-24","localName":"Christmas Day","name":"Christmas Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

     // 2022 Public Holidays
      [{"date":"2021-12-31","localName":"New Year's Day","name":"New Year's Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-01-17","localName":"Martin Luther King, Jr. Day","name":"Martin Luther King, Jr. Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-02-21","localName":"Presidents Day","name":"Washington's Birthday","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-15","localName":"Good Friday","name":"Good Friday","countryCode":"US","fixed":false,"global":false,"counties":["US-CT","US-DE","US-HI","US-IN","US-KY","US-LA","US-NC","US-ND","US-NJ","US-TN"],"launchYear":null,
      "types":["Public"]},{"date":"2022-04-15","localName":"Good Friday","name":"Good Friday","countryCode":"US","fixed":false,"global":false,"counties":["US-TX"],"launchYear":null,
      "types":["Optional"]},{"date":"2022-05-30","localName":"Memorial Day","name":"Memorial Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-06-20","localName":"Juneteenth","name":"Juneteenth","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":2021,
      "types":["Public"]},{"date":"2022-07-04","localName":"Independence Day","name":"Independence Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-09-05","localName":"Labor Day","name":"Labour Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-10-10","localName":"Columbus Day","name":"Columbus Day","countryCode":"US","fixed":false,"global":false,"counties":["US-AL","US-AZ","US-CO","US-CT","US-DC","US-GA","US-ID","US-IL","US-IN","US-IA","US-KS","US-KY","US-LA","US-ME","US-MD","US-MA","US-MS","US-MO","US-MT","US-NE","US-NH","US-NJ","US-NM","US-NY","US-NC","US-OH","US-OK","US-PA","US-RI","US-SC","US-TN","US-UT","US-VA","US-WV"],"launchYear":null,
      "types":["Public"]},{"date":"2022-11-11","localName":"Veterans Day","name":"Veterans Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-11-24","localName":"Thanksgiving Day","name":"Thanksgiving Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":1863,
      "types":["Public"]},{"date":"2022-12-26","localName":"Christmas Day","name":"Christmas Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
   
 
    //9. New Zealand's Public Holidays 
     var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/NZ','https://date.nager.at/api/v3/publicholidays/2022/NZ');

      fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
      //2021 Public Holidays
      [{"date":"2021-01-01","localName":"New Year's Day","name":"New Year's Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-01-04","localName":"Day after New Year's Day","name":"Day after New Year's Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-01-25","localName":"Wellington Anniversary Day","name":"Wellington Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-WGN","NZ-MWT"],"launchYear":null,
      "types":["Public"]},{"date":"2021-02-01","localName":"Auckland/Northland Anniversary Day","name":"Auckland Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-AUK","NZ-NTL","NZ-MWT","NZ-WKO","NZ-GIS","NZ-BOP","NZ-HKB"],"launchYear":null,
      "types":["Public"]},{"date":"2021-02-01","localName":"Nelson Anniversary Day","name":"Nelson Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-NSN"],"launchYear":null,
      "types":["Public"]},{"date":"2021-02-08","localName":"Waitangi Day","name":"Waitangi Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-03-08","localName":"Taranaki Anniversary Day","name":"Taranaki Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-TKI"],"launchYear":null,
      "types":["Public"]},{"date":"2021-03-22","localName":"Otago Anniversary Day","name":"Otago Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-OTA"],"launchYear":null,
      "types":["Public"]},{"date":"2021-04-02","localName":"Good Friday","name":"Good Friday","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-05","localName":"Easter Monday","name":"Easter Monday","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-06","localName":"Southland Anniversary Day","name":"Southland Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-STL"],"launchYear":null,
      "types":["Public"]},{"date":"2021-04-26","localName":"Anzac Day","name":"Anzac Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-06-07","localName":"Queen's Birthday","name":"Queen's Birthday","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-09-27","localName":"Dominion Day","name":"Canterbury (South) Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-CAN"],"launchYear":null,
      "types":["Public"]},{"date":"2021-10-22","localName":"Hawke's Bay Anniversary Day","name":"Hawke's Bay Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-HKB"],"launchYear":null,
      "types":["Public"]},{"date":"2021-10-25","localName":"Labour Day","name":"Labour Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-11-01","localName":"Marlborough Anniversary Day","name":"Marlborough Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-MBH"],"launchYear":null,
      "types":["Public"]},{"date":"2021-11-12","localName":"Canterbury (North & Central) Anniversary Day","name":"Canterbury Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-CAN"],"launchYear":null,
      "types":["Public"]},{"date":"2021-11-29","localName":"Chatham Islands Anniversary Day","name":"Chatham Islands Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-CIT"],"launchYear":null,
      "types":["Public"]},{"date":"2021-11-29","localName":"Westland Anniversary Day","name":"Westland Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-WTC"],"launchYear":null,
      "types":["Public"]},{"date":"2021-12-27","localName":"Christmas Day","name":"Christmas Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-12-28","localName":"Boxing Day","name":"Boxing Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

      // 2022 Public Holidays 
      [{"date":"2022-01-03","localName":"New Year's Day","name":"New Year's Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-01-04","localName":"Day after New Year's Day","name":"Day after New Year's Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-01-24","localName":"Wellington Anniversary Day","name":"Wellington Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-WGN","NZ-MWT"],"launchYear":null,
      "types":["Public"]},{"date":"2022-01-31","localName":"Auckland/Northland Anniversary Day","name":"Auckland Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-AUK","NZ-NTL","NZ-MWT","NZ-WKO","NZ-GIS","NZ-BOP","NZ-HKB"],"launchYear":null,
      "types":["Public"]},{"date":"2022-01-31","localName":"Nelson Anniversary Day","name":"Nelson Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-NSN"],"launchYear":null,
      "types":["Public"]},{"date":"2022-02-07","localName":"Waitangi Day","name":"Waitangi Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-03-14","localName":"Taranaki Anniversary Day","name":"Taranaki Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-TKI"],"launchYear":null,
      "types":["Public"]},{"date":"2022-03-21","localName":"Otago Anniversary Day","name":"Otago Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-OTA"],"launchYear":null,
      "types":["Public"]},{"date":"2022-04-15","localName":"Good Friday","name":"Good Friday","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-18","localName":"Easter Monday","name":"Easter Monday","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-19","localName":"Southland Anniversary Day","name":"Southland Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-STL"],"launchYear":null,
      "types":["Public"]},{"date":"2022-04-25","localName":"Anzac Day","name":"Anzac Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-06-06","localName":"Queen's Birthday","name":"Queen's Birthday","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-06-24","localName":"Matariki","name":"Matariki","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-09-26","localName":"Dominion Day","name":"Canterbury (South) Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-CAN"],"launchYear":null,
      "types":["Public"]},{"date":"2022-10-21","localName":"Hawke's Bay Anniversary Day","name":"Hawke's Bay Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-HKB"],"launchYear":null,
      "types":["Public"]},{"date":"2022-10-24","localName":"Labour Day","name":"Labour Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-10-31","localName":"Marlborough Anniversary Day","name":"Marlborough Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-MBH"],"launchYear":null,
      "types":["Public"]},{"date":"2022-11-11","localName":"Canterbury (North & Central) Anniversary Day","name":"Canterbury Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-CAN"],"launchYear":null,
      "types":["Public"]},{"date":"2022-11-28","localName":"Chatham Islands Anniversary Day","name":"Chatham Islands Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-CIT"],"launchYear":null,
      "types":["Public"]},{"date":"2022-11-28","localName":"Westland Anniversary Day","name":"Westland Anniversary Day","countryCode":"NZ","fixed":false,"global":false,"counties":["NZ-WTC"],"launchYear":null,
      "types":["Public"]},{"date":"2022-12-26","localName":"Christmas Day","name":"Christmas Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-12-26","localName":"Boxing Day","name":"Boxing Day","countryCode":"NZ","fixed":false,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

    //10. Turkey's Public Holidays 
     var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/TR','https://date.nager.at/api/v3/publicholidays/2022/TR');

     fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
      //2021 Public Holidays
      [{"date":"2021-01-01","localName":"Yılbaşı","name":"New Year's Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-23","localName":"Ulusal Egemenlik ve Çocuk Bayramı","name":"National Independence & Children's Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-01","localName":"İşçi Bayramı","name":"Labour Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-19","localName":"Atatürk'ü Anma, Gençlik ve Spor Bayramı","name":"Atatürk Commemoration & Youth Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-07-15","localName":"Demokrasi Bayramı","name":"Democracy Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-08-30","localName":"Zafer Bayramı","name":"Victory Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-10-29","localName":"Cumhuriyet Bayramı","name":"Republic Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

      // 2022 Public Holidays
      [{"date":"2022-01-01","localName":"Yılbaşı","name":"New Year's Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-23","localName":"Ulusal Egemenlik ve Çocuk Bayramı","name":"National Independence & Children's Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-05-01","localName":"İşçi Bayramı","name":"Labour Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-05-19","localName":"Atatürk'ü Anma, Gençlik ve Spor Bayramı","name":"Atatürk Commemoration & Youth Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-07-15","localName":"Demokrasi Bayramı","name":"Democracy Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-08-30","localName":"Zafer Bayramı","name":"Victory Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-10-29","localName":"Cumhuriyet Bayramı","name":"Republic Day","countryCode":"TR","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
   
    //11.  Denmark's Public Holidays 
      var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/DK','https://date.nager.at/api/v3/publicholidays/2022/DK');

     fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
      //2021 Public Holidays
      [{"date":"2021-01-01","localName":"Nytårsdag","name":"New Year's Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-01","localName":"Skærtorsdag","name":"Maundy Thursday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-02","localName":"Langfredag","name":"Good Friday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-04","localName":"Påskedag","name":"Easter Sunday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-05","localName":"2. Påskedag","name":"Easter Monday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-30","localName":"Store bededag","name":"General Prayer Day","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-13","localName":"Kristi Himmelfartsdag","name":"Ascension Day","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-14","localName":"Banklukkedag","name":"Bank closing day","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Bank","School","Optional"]},{"date":"2021-05-23","localName":"Pinsedag","name":"Pentecost","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-24","localName":"2. Pinsedag","name":"Whit Monday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-06-05","localName":"Grundlovsdag","name":"Constitution Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Bank","School","Optional"]},{"date":"2021-12-24","localName":"Juleaftensdag","name":"Christmas Eve","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Bank","School","Optional"]},{"date":"2021-12-25","localName":"Juledag / 1. juledag","name":"Christmas Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-12-26","localName":"2. juledag","name":"St. Stephen's Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-12-31","localName":"Nytårsaftensdag","name":"New Year's Eve","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Bank","School","Optional"]}]

      // 2022 Public Holidays
      [{"date":"2022-01-01","localName":"Nytårsdag","name":"New Year's Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-14","localName":"Skærtorsdag","name":"Maundy Thursday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-15","localName":"Langfredag","name":"Good Friday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-17","localName":"Påskedag","name":"Easter Sunday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-18","localName":"2. Påskedag","name":"Easter Monday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-05-13","localName":"Store bededag","name":"General Prayer Day","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-05-26","localName":"Kristi Himmelfartsdag","name":"Ascension Day","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-05-27","localName":"Banklukkedag","name":"Bank closing day","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Bank","School","Optional"]},{"date":"2022-06-05","localName":"Pinsedag","name":"Pentecost","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-06-05","localName":"Grundlovsdag","name":"Constitution Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Bank","School","Optional"]},{"date":"2022-06-06","localName":"2. Pinsedag","name":"Whit Monday","countryCode":"DK","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-12-24","localName":"Juleaftensdag","name":"Christmas Eve","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Bank","School","Optional"]},{"date":"2022-12-25","localName":"Juledag / 1. juledag","name":"Christmas Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-12-26","localName":"2. juledag","name":"St. Stephen's Day","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-12-31","localName":"Nytårsaftensdag","name":"New Year's Eve","countryCode":"DK","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Bank","School","Optional"]}]
   
    //12.  Singapore's Public Holidays 
     var requestUrl = ('https://date.nager.at/api/v3/publicholidays/2021/SG','https://date.nager.at/api/v3/publicholidays/2022/SG');

     fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      console.log(data)
      //2021 Public Holidays
      [{"date":"2021-01-01","localName":"New Year’s Day","name":"New Year’s Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-02-12","localName":"Chinese New Year","name":"Chinese New Year","countryCode":"SG","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-02-13","localName":"Chinese New Year","name":"Chinese New Year","countryCode":"SG","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-04-02","localName":"Good Friday","name":"Good Friday","countryCode":"SG","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-05-01","localName":"Labour Day","name":"Labour Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-08-09","localName":"National Day","name":"National Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2021-12-25","localName":"Christmas Day","name":"Christmas Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]

      // 2022 Public Holidays
      [{"date":"2022-01-01","localName":"New Year’s Day","name":"New Year’s Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-02-01","localName":"Chinese New Year","name":"Chinese New Year","countryCode":"SG","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-02-02","localName":"Chinese New Year","name":"Chinese New Year","countryCode":"SG","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-04-15","localName":"Good Friday","name":"Good Friday","countryCode":"SG","fixed":false,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-05-01","localName":"Labour Day","name":"Labour Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-08-09","localName":"National Day","name":"National Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,
      "types":["Public"]},{"date":"2022-12-25","localName":"Christmas Day","name":"Christmas Day","countryCode":"SG","fixed":true,"global":true,"counties":null,"launchYear":null,"types":["Public"]}]
}
    ))}
getApi() 
//Referenced - Country Code URL: https://www.uptodate.com/contents/image?imageKey=DRUG%2F116421