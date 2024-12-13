const symbols = [
    {
      "SYMBOL": "20MICRONS",
      "NAME OF COMPANY": "20 Microns Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-OCT-2008",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE144J01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "21STCENMGM",
      "NAME OF COMPANY": "21st Century Management Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE253B01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "360ONE",
      "NAME OF COMPANY": "360 ONE WAM LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-SEP-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE466L01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "3IINFOLTD",
      "NAME OF COMPANY": "3i Infotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE748C01038",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "3MINDIA",
      "NAME OF COMPANY": "3M India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-AUG-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE470A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "3PLAND",
      "NAME OF COMPANY": "3P Land Holdings Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-JUL-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE105C01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "5PAISA",
      "NAME OF COMPANY": "5Paisa Capital Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-NOV-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE618L01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "63MOONS",
      "NAME OF COMPANY": "63 moons technologies limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-JUN-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE111B01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "A2ZINFRA",
      "NAME OF COMPANY": "A2Z Infra Engineering Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-DEC-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE619I01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AAATECH",
      "NAME OF COMPANY": "AAA Technologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0D0U01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AAKASH",
      "NAME OF COMPANY": "Aakash Exploration Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-SEP-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE087Z01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AAREYDRUGS",
      "NAME OF COMPANY": "Aarey Drugs & Pharmaceuticals Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE198H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AARON",
      "NAME OF COMPANY": "Aaron Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE721Z01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AARTECH",
      "NAME OF COMPANY": "Aartech Solonics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01C001018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AARTIDRUGS",
      "NAME OF COMPANY": "Aarti Drugs Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-SEP-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE767A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AARTIIND",
      "NAME OF COMPANY": "Aarti Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE769A01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "AARTIPHARM",
      "NAME OF COMPANY": "Aarti Pharmalabs Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JAN-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0LRU01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "AARTISURF",
      "NAME OF COMPANY": "Aarti Surfactants Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUL-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE09EO01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AARVEEDEN",
      "NAME OF COMPANY": "Aarvee Denims & Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE273D01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AARVI",
      "NAME OF COMPANY": "Aarvi Encon Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE754X01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AAVAS",
      "NAME OF COMPANY": "Aavas Financiers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-OCT-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE216P01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ABAN",
      "NAME OF COMPANY": "Aban Offshore Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE421A01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ABB",
      "NAME OF COMPANY": "ABB India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE117A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ABBOTINDIA",
      "NAME OF COMPANY": "Abbott India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JAN-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE358A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ABCAPITAL",
      "NAME OF COMPANY": "Aditya Birla Capital Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-SEP-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE674K01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ABFRL",
      "NAME OF COMPANY": "Aditya Birla Fashion and Retail Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUL-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE647O01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ABMINTLLTD",
      "NAME OF COMPANY": "ABM International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-SEP-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE251C01025",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ABSLAMC",
      "NAME OF COMPANY": "Aditya Birla Sun Life AMC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-OCT-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE404A01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ACC",
      "NAME OF COMPANY": "ACC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-NOV-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE012A01025",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ACCELYA",
      "NAME OF COMPANY": "Accelya Solutions India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-DEC-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE793A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ACCURACY",
      "NAME OF COMPANY": "Accuracy Shipping Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-DEC-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE648Z01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ACE",
      "NAME OF COMPANY": "Action Construction Equipment Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-SEP-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE731H01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ACEINTEG",
      "NAME OF COMPANY": "Ace Integrated Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE543V01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ACI",
      "NAME OF COMPANY": "Archean Chemical Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE128X01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ACL",
      "NAME OF COMPANY": "Andhra Cements Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE666E01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ACLGATI",
      "NAME OF COMPANY": "Allcargo Gati Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-OCT-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE152B01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ADANIENSOL",
      "NAME OF COMPANY": "Adani Energy Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-JUL-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE931S01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ADANIENT",
      "NAME OF COMPANY": "Adani Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUN-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE423A01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ADANIGREEN",
      "NAME OF COMPANY": "Adani Green Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUN-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE364U01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ADANIPORTS",
      "NAME OF COMPANY": "Adani Ports and Special Economic Zone Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-NOV-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE742F01042",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ADANIPOWER",
      "NAME OF COMPANY": "Adani Power Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-AUG-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE814H01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ADFFOODS",
      "NAME OF COMPANY": "ADF Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-SEP-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE982B01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ADL",
      "NAME OF COMPANY": "Archidply Decor Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0CHO01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ADORWELD",
      "NAME OF COMPANY": "Ador Welding Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE045A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ADROITINFO",
      "NAME OF COMPANY": "Adroit Infotech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-AUG-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE737B01033",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ADSL",
      "NAME OF COMPANY": "Allied Digital Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-JUL-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE102I01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ADVANIHOTR",
      "NAME OF COMPANY": "Advani Hotels & Resorts (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-JUN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE199C01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ADVENZYMES",
      "NAME OF COMPANY": "Advanced Enzyme Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-AUG-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE837H01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AEGISCHEM",
      "NAME OF COMPANY": "Aegis Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE208C01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AEROFLEX",
      "NAME OF COMPANY": "Aeroflex Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-AUG-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE024001021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AETHER",
      "NAME OF COMPANY": "Aether Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JUN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0BWX01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AFFLE",
      "NAME OF COMPANY": "Affle (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-AUG-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00WC01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AGARIND",
      "NAME OF COMPANY": "Agarwal Industrial Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAY-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE204E01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AGI",
      "NAME OF COMPANY": "AGI Greenpac Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAY-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE415A01038",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AGRITECH",
      "NAME OF COMPANY": "Agri-Tech (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE449G01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AGROPHOS",
      "NAME OF COMPANY": "Agro Phos India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE740V01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AGSTRA",
      "NAME OF COMPANY": "AGS Transact Technologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "31-JAN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE583L01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AHL",
      "NAME OF COMPANY": "Abans Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-DEC-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00ZE01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AHLADA",
      "NAME OF COMPANY": "Ahlada Engineers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00PV01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AHLEAST",
      "NAME OF COMPANY": "Asian Hotels (East) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE926K01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AHLUCONT",
      "NAME OF COMPANY": "Ahluwalia Contracts (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2009",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE758C01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AIAENG",
      "NAME OF COMPANY": "AIA Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE212H01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AIRAN",
      "NAME OF COMPANY": "Airan Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-MAY-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE645W01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AIROLAM",
      "NAME OF COMPANY": "Airo Lam limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE801L01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AJANTPHARM",
      "NAME OF COMPANY": "Ajanta Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAY-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE031B01049",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AJMERA",
      "NAME OF COMPANY": "Ajmera Realty & Infra India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE298G01027",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AJOONI",
      "NAME OF COMPANY": "Ajooni Biotech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-MAY-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE820Y01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AKASH",
      "NAME OF COMPANY": "Akash Infra-Projects Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-OCT-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE737W01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AKG",
      "NAME OF COMPANY": "Akg Exim Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00Y801016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AKI",
      "NAME OF COMPANY": "AKI India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-APR-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE642Z01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AKSHAR",
      "NAME OF COMPANY": "Akshar Spintex Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-MAY-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE256Z01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AKSHARCHEM",
      "NAME OF COMPANY": "AksharChem India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-MAR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE542B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AKSHOPTFBR",
      "NAME OF COMPANY": "Aksh Optifibre Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-AUG-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE523B01011",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "AKZOINDIA",
      "NAME OF COMPANY": "Akzo Nobel India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUN-2001",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE133A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ALANKIT",
      "NAME OF COMPANY": "Alankit Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-JUN-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE914E01040",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ALBERTDAVD",
      "NAME OF COMPANY": "Albert David Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE155C01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ALEMBICLTD",
      "NAME OF COMPANY": "Alembic Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-SEP-1999",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE426A01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ALICON",
      "NAME OF COMPANY": "Alicon Castalloy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE062D01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ALKALI",
      "NAME OF COMPANY": "Alkali Metals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE773I01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ALKEM",
      "NAME OF COMPANY": "Alkem Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-DEC-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE540L01014",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ALKYLAMINE",
      "NAME OF COMPANY": "Alkyl Amines Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-NOV-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE150B01039",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ALLCARGO",
      "NAME OF COMPANY": "Allcargo Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUN-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE418H01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ALLSEC",
      "NAME OF COMPANY": "Allsec Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE835G01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ALMONDZ",
      "NAME OF COMPANY": "Almondz Global Securities Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-JUN-2008",
      "PAID UP VALUE": 6,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE326B01027",
      "FACE VALUE": 6
    },
    {
      "SYMBOL": "ALOKINDS",
      "NAME OF COMPANY": "Alok Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-FEB-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE270A01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ALPA",
      "NAME OF COMPANY": "Alpa Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-AUG-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE385I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ALPHAGEO",
      "NAME OF COMPANY": "Alphageo (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-MAY-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE137C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ALPSINDUS",
      "NAME OF COMPANY": "Alps Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE093B01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AMBER",
      "NAME OF COMPANY": "Amber Enterprises India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JAN-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE371P01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AMBICAAGAR",
      "NAME OF COMPANY": "Ambica Agarbathies & Aroma industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUN-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE792B01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AMBIKCO",
      "NAME OF COMPANY": "Ambika Cotton Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE540G01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AMBUJACEM",
      "NAME OF COMPANY": "Ambuja Cements Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-FEB-1998",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE079A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AMDIND",
      "NAME OF COMPANY": "AMD Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-MAR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE005I01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AMIORG",
      "NAME OF COMPANY": "Ami Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-SEP-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00FF01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AMJLAND",
      "NAME OF COMPANY": "Amj Land Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE606A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AMNPLST",
      "NAME OF COMPANY": "Amines & Plasticizers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-NOV-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE275D01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AMRUTANJAN",
      "NAME OF COMPANY": "Amrutanjan Health Care Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-JAN-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE098F01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ANANDRATHI",
      "NAME OF COMPANY": "Anand Rathi Wealth Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE463V01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ANANTRAJ",
      "NAME OF COMPANY": "Anant Raj Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-SEP-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE242C01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ANDHRAPAP",
      "NAME OF COMPANY": "ANDHRA PAPER LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-MAY-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE435A01028",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ANDHRSUGAR",
      "NAME OF COMPANY": "The Andhra Sugars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE715B01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ANGELONE",
      "NAME OF COMPANY": "Angel One Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE732I01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ANIKINDS",
      "NAME OF COMPANY": "Anik Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "21-MAY-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE087B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ANKITMETAL",
      "NAME OF COMPANY": "Ankit Metal & Power Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-MAR-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE106I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ANMOL",
      "NAME OF COMPANY": "Anmol India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02AR01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ANTGRAPHIC",
      "NAME OF COMPANY": "Antarctica Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "31-DEC-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE414B01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ANUP",
      "NAME OF COMPANY": "The Anup Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE294Z01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ANURAS",
      "NAME OF COMPANY": "Anupam Rasayan India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE930P01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "APARINDS",
      "NAME OF COMPANY": "Apar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JUL-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE372A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "APCL",
      "NAME OF COMPANY": "Anjani Portland Cement Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-APR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE071F01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "APCOTEXIND",
      "NAME OF COMPANY": "Apcotex Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE116A01032",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "APEX",
      "NAME OF COMPANY": "Apex Frozen Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-SEP-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE346W01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "APLAPOLLO",
      "NAME OF COMPANY": "APL Apollo Tubes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE702C01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "APLLTD",
      "NAME OF COMPANY": "Alembic Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE901L01018",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "APOLLO",
      "NAME OF COMPANY": "Apollo Micro Systems Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-JAN-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE713T01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "APOLLOHOSP",
      "NAME OF COMPANY": "Apollo Hospitals Enterprise Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JAN-1996",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE437A01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "APOLLOPIPE",
      "NAME OF COMPANY": "Apollo Pipes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-NOV-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE126J01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "APOLLOTYRE",
      "NAME OF COMPANY": "Apollo Tyres Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAY-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE438A01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "APOLSINHOT",
      "NAME OF COMPANY": "Apollo Sindoori Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2015",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE451F01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "APTECHT",
      "NAME OF COMPANY": "Aptech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-SEP-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE266F01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "APTUS",
      "NAME OF COMPANY": "Aptus Value Housing Finance India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-AUG-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE852O01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ARCHIDPLY",
      "NAME OF COMPANY": "Archidply Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUL-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE877I01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARCHIES",
      "NAME OF COMPANY": "Archies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-SEP-1998",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE731A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ARE&M",
      "NAME OF COMPANY": "Amara Raja Energy & Mobility Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-SEP-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE885A01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ARENTERP",
      "NAME OF COMPANY": "Rajdarshan Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE610C01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARIES",
      "NAME OF COMPANY": "Aries Agro Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE298I01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARIHANTCAP",
      "NAME OF COMPANY": "Arihant Capital Markets Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUN-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE420B01036",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ARIHANTSUP",
      "NAME OF COMPANY": "Arihant Superstructures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-MAR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE643K01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARMANFIN",
      "NAME OF COMPANY": "Arman Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE109C01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AROGRANITE",
      "NAME OF COMPANY": "Aro Granite Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-APR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE210C01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARROWGREEN",
      "NAME OF COMPANY": "Arrow Greentech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-MAY-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE570D01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARSHIYA",
      "NAME OF COMPANY": "Arshiya Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-DEC-2009",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE968D01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ARTEMISMED",
      "NAME OF COMPANY": "Artemis Medicare Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JAN-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE025R01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ARTNIRMAN",
      "NAME OF COMPANY": "Art Nirman Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE738V01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARVEE",
      "NAME OF COMPANY": "Arvee Laboratories (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE006Z01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARVIND",
      "NAME OF COMPANY": "Arvind Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE034A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ARVINDFASN",
      "NAME OF COMPANY": "Arvind Fashions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAR-2019",
      "PAID UP VALUE": 4,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE955V01021",
      "FACE VALUE": 4
    },
    {
      "SYMBOL": "ARVSMART",
      "NAME OF COMPANY": "Arvind SmartSpaces Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE034S01021",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASAHIINDIA",
      "NAME OF COMPANY": "Asahi India Glass Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-MAR-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE439A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ASAHISONG",
      "NAME OF COMPANY": "Asahi Songwon Colors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-AUG-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE228I01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASAL",
      "NAME OF COMPANY": "Automotive Stampings and Assemblies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAR-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE900C01027",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASALCBR",
      "NAME OF COMPANY": "Associated Alcohols & Breweries Ltd.",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-FEB-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE073G01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASHAPURMIN",
      "NAME OF COMPANY": "Ashapura Minechem Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-SEP-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE348A01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ASHIANA",
      "NAME OF COMPANY": "Ashiana Housing Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUN-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE365D01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ASHIMASYN",
      "NAME OF COMPANY": "Ashima Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUL-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE440A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASHOKA",
      "NAME OF COMPANY": "Ashoka Buildcon Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-OCT-2010",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE442H01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ASHOKAMET",
      "NAME OF COMPANY": "Ashoka Metcast Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-JUN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE760Y01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASHOKLEY",
      "NAME OF COMPANY": "Ashok Leyland Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAY-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE208A01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ASIANENE",
      "NAME OF COMPANY": "Asian Energy Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE276G01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASIANHOTNR",
      "NAME OF COMPANY": "Asian Hotels (North) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-APR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE363A01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASIANPAINT",
      "NAME OF COMPANY": "Asian Paints Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAY-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE021A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ASIANTILES",
      "NAME OF COMPANY": "Asian Granito India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE022I01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASKAUTOLTD",
      "NAME OF COMPANY": "ASK Automotive Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-NOV-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE491J01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ASMS",
      "NAME OF COMPANY": "Bartronics India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-FEB-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE855F01042",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ASPINWALL",
      "NAME OF COMPANY": "Aspinwall and Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE991I01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASTEC",
      "NAME OF COMPANY": "Astec LifeSciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-NOV-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE563J01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASTERDM",
      "NAME OF COMPANY": "Aster DM Healthcare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-FEB-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE914M01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ASTRAL",
      "NAME OF COMPANY": "Astral Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-MAR-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE006I01046",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ASTRAMICRO",
      "NAME OF COMPANY": "Astra Microwave Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE386C01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ASTRAZEN",
      "NAME OF COMPANY": "AstraZeneca Pharma India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-MAY-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE203A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ASTRON",
      "NAME OF COMPANY": "Astron Paper & Board Mill Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-DEC-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE646X01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ATALREAL",
      "NAME OF COMPANY": "Atal Realtech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAY-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0ALR01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ATAM",
      "NAME OF COMPANY": "Atam Valves Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE09KD01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ATFL",
      "NAME OF COMPANY": "Agro Tech Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-DEC-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE209A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ATGL",
      "NAME OF COMPANY": "Adani Total Gas Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE399L01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ATL",
      "NAME OF COMPANY": "Allcargo Terminals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-AUG-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0NN701020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ATLANTAA",
      "NAME OF COMPANY": "ATLANTAA LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "25-SEP-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE285H01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ATUL",
      "NAME OF COMPANY": "Atul Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-MAY-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE100A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ATULAUTO",
      "NAME OF COMPANY": "Atul Auto Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-JUN-2013",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE951D01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "AUBANK",
      "NAME OF COMPANY": "AU Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JUL-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE949L01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AURIONPRO",
      "NAME OF COMPANY": "Aurionpro Solutions Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-OCT-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE132H01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AUROPHARMA",
      "NAME OF COMPANY": "Aurobindo Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE406A01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AURUM",
      "NAME OF COMPANY": "Aurum PropTech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-AUG-2015",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE898S01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "AUSOMENT",
      "NAME OF COMPANY": "Ausom Enterprise Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE218C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AUTOAXLES",
      "NAME OF COMPANY": "Automotive Axles Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAY-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE449A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AUTOIND",
      "NAME OF COMPANY": "Autoline Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-JAN-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE718H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AVADHSUGAR",
      "NAME OF COMPANY": "Avadh Sugar & Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE349W01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AVALON",
      "NAME OF COMPANY": "Avalon Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-APR-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0LCL01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AVANTIFEED",
      "NAME OF COMPANY": "Avanti Feeds Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-APR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE871C01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AVG",
      "NAME OF COMPANY": "AVG Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAY-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE680Z01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AVONMORE",
      "NAME OF COMPANY": "Avonmore Capital & Management Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JAN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE323B01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AVROIND",
      "NAME OF COMPANY": "AVRO INDIA LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE652Z01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AVTNPL",
      "NAME OF COMPANY": "AVT Natural Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JAN-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE488D01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AWHCL",
      "NAME OF COMPANY": "Antony Waste Handling Cell Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JAN-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01BK01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "AWL",
      "NAME OF COMPANY": "Adani Wilmar Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE699H01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AXISBANK",
      "NAME OF COMPANY": "Axis Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-NOV-1998",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE238A01034",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "AXISCADES",
      "NAME OF COMPANY": "AXISCADES Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-DEC-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE555B01013",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "AXITA",
      "NAME OF COMPANY": "Axita Cotton Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JUN-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02EZ01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "AYMSYNTEX",
      "NAME OF COMPANY": "AYM Syntex Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE193B01039",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "AZAD",
      "NAME OF COMPANY": "Azad Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-DEC-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02IJ01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BAFNAPH",
      "NAME OF COMPANY": "Bafna Pharmaceuticals Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-FEB-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE878I01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BAGFILMS",
      "NAME OF COMPANY": "B.A.G Films and Media Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-OCT-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE116D01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BAIDFIN",
      "NAME OF COMPANY": "Baid Finserv Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JAN-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE020D01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BAJAJ-AUTO",
      "NAME OF COMPANY": "Bajaj Auto Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAY-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE917I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BAJAJCON",
      "NAME OF COMPANY": "Bajaj Consumer Care Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-AUG-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE933K01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BAJAJELEC",
      "NAME OF COMPANY": "Bajaj Electricals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE193E01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BAJAJFINSV",
      "NAME OF COMPANY": "Bajaj Finserv Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAY-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE918I01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BAJAJHCARE",
      "NAME OF COMPANY": "Bajaj Healthcare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-NOV-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE411U01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BAJAJHIND",
      "NAME OF COMPANY": "Bajaj Hindusthan Sugar Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE306A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BAJAJHLDNG",
      "NAME OF COMPANY": "Bajaj Holdings & Investment Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE118A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BAJEL",
      "NAME OF COMPANY": "Bajel Projects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-DEC-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0KQN01018",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BAJFINANCE",
      "NAME OF COMPANY": "Bajaj Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE296A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BALAJITELE",
      "NAME OF COMPANY": "Balaji Telefilms Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-NOV-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE794B01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BALAMINES",
      "NAME OF COMPANY": "Balaji Amines Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-APR-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE050E01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BALAXI",
      "NAME OF COMPANY": "BALAXI PHARMACEUTICALS LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-NOV-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE618N01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BALKRISHNA",
      "NAME OF COMPANY": "Balkrishna Paper Mills Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-JUL-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE875R01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BALKRISIND",
      "NAME OF COMPANY": "Balkrishna Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JAN-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE787D01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BALMLAWRIE",
      "NAME OF COMPANY": "Balmer Lawrie & Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JUL-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE164A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BALPHARMA",
      "NAME OF COMPANY": "Bal Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAY-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE083D01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BALRAMCHIN",
      "NAME OF COMPANY": "Balrampur Chini Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE119A01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BANARBEADS",
      "NAME OF COMPANY": "Banaras Beads Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUL-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE655B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BANARISUG",
      "NAME OF COMPANY": "Bannari Amman Sugars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-MAY-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE459A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BANCOINDIA",
      "NAME OF COMPANY": "Banco Products (I) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-DEC-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE213C01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BANDHANBNK",
      "NAME OF COMPANY": "Bandhan Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-MAR-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE545U01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BANG",
      "NAME OF COMPANY": "Bang Overseas Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-FEB-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE863I01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BANKA",
      "NAME OF COMPANY": "Banka BioLoo Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE862Y01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BANKBARODA",
      "NAME OF COMPANY": "Bank of Baroda",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-FEB-1997",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE028A01039",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BANKINDIA",
      "NAME OF COMPANY": "Bank of India",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-APR-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE084A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BANSWRAS",
      "NAME OF COMPANY": "Banswara Syntex Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-APR-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE629D01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BARBEQUE",
      "NAME OF COMPANY": "Barbeque Nation Hospitality Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE382M01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BASF",
      "NAME OF COMPANY": "BASF India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE373A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BASML",
      "NAME OF COMPANY": "Bannari Amman Spinning Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-NOV-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE186H01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BATAINDIA",
      "NAME OF COMPANY": "Bata India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUN-2003",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE176A01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BAYERCROP",
      "NAME OF COMPANY": "Bayer Cropscience Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JAN-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE462A01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BBL",
      "NAME OF COMPANY": "Bharat Bijlee Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE464A01028",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BBOX",
      "NAME OF COMPANY": "Black Box Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-JUL-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE676A01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BBTC",
      "NAME OF COMPANY": "Bombay Burmah Trading Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE050A01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BBTCL",
      "NAME OF COMPANY": "B&B Triplewall Containers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01EE01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BCG",
      "NAME OF COMPANY": "Brightcom Group Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAY-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE425B01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BCLIND",
      "NAME OF COMPANY": "Bcl Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-MAR-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE412G01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BCONCEPTS",
      "NAME OF COMPANY": "Brand Concepts Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-JAN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE977Y01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BDL",
      "NAME OF COMPANY": "Bharat Dynamics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE171Z01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BEARDSELL",
      "NAME OF COMPANY": "Beardsell Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-JAN-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE520H01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BECTORFOOD",
      "NAME OF COMPANY": "Mrs. Bectors Food Specialities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-DEC-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE495P01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BEDMUTHA",
      "NAME OF COMPANY": "Bedmutha Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE844K01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BEL",
      "NAME OF COMPANY": "Bharat Electronics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE263A01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BEML",
      "NAME OF COMPANY": "BEML Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE258A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BEPL",
      "NAME OF COMPANY": "Bhansali Engineering Polymers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-MAR-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE922A01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BERGEPAINT",
      "NAME OF COMPANY": "Berger Paints (I) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-NOV-1999",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE463A01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BFINVEST",
      "NAME OF COMPANY": "BF Investment Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JAN-2011",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE878K01010",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BFUTILITIE",
      "NAME OF COMPANY": "BF Utilities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAY-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE243D01012",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BGRENERGY",
      "NAME OF COMPANY": "BGR Energy Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE661I01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BHAGCHEM",
      "NAME OF COMPANY": "Bhagiradha Chemicals & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE414D01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BHAGERIA",
      "NAME OF COMPANY": "Bhageria Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-MAR-2016",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE354C01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BHAGYANGR",
      "NAME OF COMPANY": "Bhagyanagar India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE458B01036",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BHANDARI",
      "NAME OF COMPANY": "Bhandari Hosiery Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JAN-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE474E01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BHARATFORG",
      "NAME OF COMPANY": "Bharat Forge Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-APR-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE465A01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BHARATGEAR",
      "NAME OF COMPANY": "Bharat Gears Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE561C01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BHARATRAS",
      "NAME OF COMPANY": "Bharat Rasayan Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-OCT-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE838B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BHARATWIRE",
      "NAME OF COMPANY": "Bharat Wire Ropes Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-APR-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE316L01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BHARTIARTL",
      "NAME OF COMPANY": "Bharti Airtel Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-2002",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE397D01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BHEL",
      "NAME OF COMPANY": "Bharat Heavy Electricals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-NOV-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE257A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BIGBLOC",
      "NAME OF COMPANY": "Bigbloc Construction Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-SEP-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE412U01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BIKAJI",
      "NAME OF COMPANY": "Bikaji Foods International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-NOV-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00E101023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BIL",
      "NAME OF COMPANY": "Bhartiya International Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-APR-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE828A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BINANIIND",
      "NAME OF COMPANY": "Binani Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-SEP-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE071A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BIOCON",
      "NAME OF COMPANY": "Biocon Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2004",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE376G01013",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "BIOFILCHEM",
      "NAME OF COMPANY": "Biofil Chemicals & Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JUN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE829A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BIRLACABLE",
      "NAME OF COMPANY": "Birla Cable Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-DEC-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE800A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BIRLACORPN",
      "NAME OF COMPANY": "Birla Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE340A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BIRLAMONEY",
      "NAME OF COMPANY": "Aditya Birla Money Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-FEB-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE865C01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BKMINDST",
      "NAME OF COMPANY": "Bkm Industries Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "30-MAR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE831Q01016",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BLAL",
      "NAME OF COMPANY": "BEML Land Assets Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-APR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0N7W01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BLBLIMITED",
      "NAME OF COMPANY": "BLB Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "31-MAY-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE791A01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BLISSGVS",
      "NAME OF COMPANY": "Bliss GVS Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-JUL-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE416D01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BLKASHYAP",
      "NAME OF COMPANY": "B. L. Kashyap and Sons Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAR-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE350H01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BLS",
      "NAME OF COMPANY": "BLS International Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE153T01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BLSE",
      "NAME OF COMPANY": "BLS E-Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-FEB-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0NLT01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BLUECHIP",
      "NAME OF COMPANY": "Blue Chip India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-MAR-1997",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE657B01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BLUEDART",
      "NAME OF COMPANY": "Blue Dart Express Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-DEC-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE233B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BLUEJET",
      "NAME OF COMPANY": "Blue Jet Healthcare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0KBH01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BLUESTARCO",
      "NAME OF COMPANY": "Blue Star Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUN-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE472A01039",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BODALCHEM",
      "NAME OF COMPANY": "Bodal Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-AUG-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE338D01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BOHRAIND",
      "NAME OF COMPANY": "Bohra Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-OCT-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE802W01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BOMDYEING",
      "NAME OF COMPANY": "Bombay Dyeing & Mfg Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-APR-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE032A01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BOROLTD",
      "NAME OF COMPANY": "Borosil Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-JUL-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02PY01013",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BORORENEW",
      "NAME OF COMPANY": "BOROSIL RENEWABLES LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAY-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE666D01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BOSCHLTD",
      "NAME OF COMPANY": "Bosch Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAY-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE323A01026",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BPCL",
      "NAME OF COMPANY": "Bharat Petroleum Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE029A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BPL",
      "NAME OF COMPANY": "BPL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE110A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BRIGADE",
      "NAME OF COMPANY": "Brigade Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-DEC-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE791I01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BRITANNIA",
      "NAME OF COMPANY": "Britannia Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE216A01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BRNL",
      "NAME OF COMPANY": "Bharat Road Network Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-SEP-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE727S01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BROOKS",
      "NAME OF COMPANY": "Brooks Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-SEP-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE650L01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BSE",
      "NAME OF COMPANY": "BSE Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-FEB-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE118H01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BSHSL",
      "NAME OF COMPANY": "Bombay Super Hybrid Seeds Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-OCT-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE032Z01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "BSL",
      "NAME OF COMPANY": "BSL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUL-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE594B01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BSOFT",
      "NAME OF COMPANY": "BIRLASOFT LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-NOV-1999",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE836A01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "BTML",
      "NAME OF COMPANY": "Bodhi Tree Multimedia Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0EEJ01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BURNPUR",
      "NAME OF COMPANY": "Burnpur Cement Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE817H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BUTTERFLY",
      "NAME OF COMPANY": "Butterfly Gandhimathi Appliances Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-APR-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE295F01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BVCL",
      "NAME OF COMPANY": "Barak Valley Cements Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-NOV-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE139I01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "BYKE",
      "NAME OF COMPANY": "The Byke Hospitality Ltd",
      "SERIES": "BE",
      "DATE OF LISTING": "15-APR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE319B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CALSOFT",
      "NAME OF COMPANY": "California Software Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-JUN-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE526B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CAMLINFINE",
      "NAME OF COMPANY": "Camlin Fine Sciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JAN-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE052I01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CAMPUS",
      "NAME OF COMPANY": "Campus Activewear Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE278Y01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CAMS",
      "NAME OF COMPANY": "Computer Age Management Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAY-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE596I01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CANBK",
      "NAME OF COMPANY": "Canara Bank",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-DEC-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE476A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CANFINHOME",
      "NAME OF COMPANY": "Can Fin Homes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE477A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CANTABIL",
      "NAME OF COMPANY": "Cantabil Retail India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-OCT-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE068L01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CAPACITE",
      "NAME OF COMPANY": "Capacit'e Infraprojects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-SEP-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE264T01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CAPITALSFB",
      "NAME OF COMPANY": "Capital Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE646H01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CAPLIPOINT",
      "NAME OF COMPANY": "Caplin Point Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUN-2014",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE475E01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CAPTRUST",
      "NAME OF COMPANY": "Capital Trust Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JAN-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE707C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CARBORUNIV",
      "NAME OF COMPANY": "Carborundum Universal Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE120A01034",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CAREERP",
      "NAME OF COMPANY": "Career Point Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE521J01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CARERATING",
      "NAME OF COMPANY": "CARE Ratings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE752H01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CARTRADE",
      "NAME OF COMPANY": "Cartrade Tech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE290S01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CARYSIL",
      "NAME OF COMPANY": "CARYSIL LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JAN-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE482D01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CASTROLIND",
      "NAME OF COMPANY": "Castrol India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAR-2014",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE172A01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CCHHL",
      "NAME OF COMPANY": "Country Club Hospitality & Holidays Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-FEB-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE652F01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CCL",
      "NAME OF COMPANY": "CCL Products (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUN-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE421D01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CDSL",
      "NAME OF COMPANY": "Central Depository Services (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JUN-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE736A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CEATLTD",
      "NAME OF COMPANY": "CEAT Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-FEB-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE482A01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CELEBRITY",
      "NAME OF COMPANY": "Celebrity Fashions Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-JAN-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE185H01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CELLO",
      "NAME OF COMPANY": "Cello World Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0LMW01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CENTENKA",
      "NAME OF COMPANY": "Century Enka Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE485A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CENTEXT",
      "NAME OF COMPANY": "Century Extrusions Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-JUL-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE281A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CENTRALBK",
      "NAME OF COMPANY": "Central Bank of India",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-AUG-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE483A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CENTRUM",
      "NAME OF COMPANY": "Centrum Capital Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-APR-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE660C01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CENTUM",
      "NAME OF COMPANY": "Centum Electronics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-OCT-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE320B01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CENTURYPLY",
      "NAME OF COMPANY": "Century Plyboards (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE348B01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CENTURYTEX",
      "NAME OF COMPANY": "Century Textiles & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUN-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE055A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CERA",
      "NAME OF COMPANY": "Cera Sanitaryware Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE739E01017",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CEREBRAINT",
      "NAME OF COMPANY": "Cerebra Integrated Technologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "26-JUN-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE345B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CESC",
      "NAME OF COMPANY": "CESC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE486A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CGCL",
      "NAME OF COMPANY": "Capri Global Capital Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-OCT-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE180C01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CGPOWER",
      "NAME OF COMPANY": "CG Power and Industrial Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE067A01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CHALET",
      "NAME OF COMPANY": "Chalet Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-FEB-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE427F01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CHAMBLFERT",
      "NAME OF COMPANY": "Chambal Fertilizers & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE085A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CHEMBOND",
      "NAME OF COMPANY": "Chembond Chemicals Ltd",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-NOV-2019",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE995D01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CHEMCON",
      "NAME OF COMPANY": "Chemcon Speciality Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03YM01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CHEMFAB",
      "NAME OF COMPANY": "Chemfab Alkalis Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-APR-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE783X01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CHEMPLASTS",
      "NAME OF COMPANY": "Chemplast Sanmar Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-AUG-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE488A01050",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CHENNPETRO",
      "NAME OF COMPANY": "Chennai Petroleum Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUN-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE178A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CHEVIOT",
      "NAME OF COMPANY": "Cheviot Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE974B01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CHOICEIN",
      "NAME OF COMPANY": "Choice International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE102B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CHOLAFIN",
      "NAME OF COMPANY": "Cholamandalam Investment and Finance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-MAY-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE121A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CHOLAHLDNG",
      "NAME OF COMPANY": "Cholamandalam Financial Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-SEP-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE149A01033",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CIEINDIA",
      "NAME OF COMPANY": "CIE Automotive India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-AUG-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE536H01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CIGNITITEC",
      "NAME OF COMPANY": "Cigniti Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-OCT-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE675C01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CINELINE",
      "NAME OF COMPANY": "Cineline India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-JUN-2012",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE704H01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CINEVISTA",
      "NAME OF COMPANY": "Cinevista Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-MAY-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE039B01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CIPLA",
      "NAME OF COMPANY": "Cipla Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE059A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CLEAN",
      "NAME OF COMPANY": "Clean Science and Technology Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE227W01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CLEDUCATE",
      "NAME OF COMPANY": "CL Educate Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAR-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE201M01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CLSEL",
      "NAME OF COMPANY": "Chaman Lal Setia Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAY-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE419D01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CMSINFO",
      "NAME OF COMPANY": "CMS Info Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE925R01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "COALINDIA",
      "NAME OF COMPANY": "Coal India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-NOV-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE522F01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "COASTCORP",
      "NAME OF COMPANY": "Coastal Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE377E01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "COCHINSHIP",
      "NAME OF COMPANY": "Cochin Shipyard Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE704P01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "COFFEEDAY",
      "NAME OF COMPANY": "Coffee Day Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE335K01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "COFORGE",
      "NAME OF COMPANY": "Coforge Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-AUG-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE591G01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "COLPAL",
      "NAME OF COMPANY": "Colgate Palmolive (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-DEC-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE259A01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "COMPINFO",
      "NAME OF COMPANY": "Compuage Infocom Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "07-JUL-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE070C01037",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "COMPUSOFT",
      "NAME OF COMPANY": "Compucom Software Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-MAR-2012",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE453B01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "COMSYN",
      "NAME OF COMPANY": "Commercial Syn Bags Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JAN-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE073V01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CONCOR",
      "NAME OF COMPANY": "Container Corporation of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAY-1997",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE111A01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CONCORDBIO",
      "NAME OF COMPANY": "Concord Biotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-AUG-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE338H01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CONFIPET",
      "NAME OF COMPANY": "Confidence Petroleum India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-JUN-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE552D01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CONSOFINVT",
      "NAME OF COMPANY": "Consolidated Finvest & Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE025A01027",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CONTROLPR",
      "NAME OF COMPANY": "Control Print Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE663B01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CORALFINAC",
      "NAME OF COMPANY": "Coral India Finance & Housing Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-MAR-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE558D01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CORDSCABLE",
      "NAME OF COMPANY": "Cords Cable Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-FEB-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE792I01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "COROMANDEL",
      "NAME OF COMPANY": "Coromandel International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAY-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE169A01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "COSMOFIRST",
      "NAME OF COMPANY": "COSMO FIRST LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE757A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "COUNCODOS",
      "NAME OF COMPANY": "Country Condo's Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-JAN-2009",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE695B01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CRAFTSMAN",
      "NAME OF COMPANY": "Craftsman Automation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAR-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00LO01017",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CREATIVE",
      "NAME OF COMPANY": "Creative Newtech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-AUG-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE985W01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CREATIVEYE",
      "NAME OF COMPANY": "Creative Eye Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-DEC-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE230B01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CREDITACC",
      "NAME OF COMPANY": "CREDITACCESS GRAMEEN LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE741K01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CREST",
      "NAME OF COMPANY": "Crest Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE559D01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CRISIL",
      "NAME OF COMPANY": "CRISIL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUN-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE007A01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CROMPTON",
      "NAME OF COMPANY": "Crompton Greaves Consumer Electricals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-MAY-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE299U01018",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CROWN",
      "NAME OF COMPANY": "Crown Lifters Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-FEB-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE491V01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CSBBANK",
      "NAME OF COMPANY": "CSB Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-DEC-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE679A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CSLFINANCE",
      "NAME OF COMPANY": "CSL Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JUL-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE718F01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CTE",
      "NAME OF COMPANY": "Cambridge Technology Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE627H01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CUB",
      "NAME OF COMPANY": "City Union Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-AUG-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE491A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "CUBEXTUB",
      "NAME OF COMPANY": "Cubex Tubings Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "24-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE144D01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CUMMINSIND",
      "NAME OF COMPANY": "Cummins India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE298A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "CUPID",
      "NAME OF COMPANY": "Cupid Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-SEP-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE509F01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CYBERMEDIA",
      "NAME OF COMPANY": "Cyber Media (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-JUN-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE278G01037",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CYBERTECH",
      "NAME OF COMPANY": "Cybertech Systems And Software Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JAN-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE214A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "CYIENT",
      "NAME OF COMPANY": "Cyient Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-SEP-1998",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE136B01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "CYIENTDLM",
      "NAME OF COMPANY": "Cyient DLM Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE055S01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DABUR",
      "NAME OF COMPANY": "Dabur India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-APR-1999",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE016A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DALBHARAT",
      "NAME OF COMPANY": "Dalmia Bharat Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-JAN-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00R701025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DALMIASUG",
      "NAME OF COMPANY": "Dalmia Bharat Sugar and Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JAN-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE495A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DAMODARIND",
      "NAME OF COMPANY": "Damodar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUL-2016",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE497D01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DANGEE",
      "NAME OF COMPANY": "Dangee Dums Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-NOV-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE688Y01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DATAMATICS",
      "NAME OF COMPANY": "Datamatics Global Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAY-2004",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE365B01017",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DATAPATTNS",
      "NAME OF COMPANY": "Data Patterns (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-DEC-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0IX101010",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DAVANGERE",
      "NAME OF COMPANY": "Davangere Sugar Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-JAN-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE179G01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DBCORP",
      "NAME OF COMPANY": "D.B.Corp Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-JAN-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE950I01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DBL",
      "NAME OF COMPANY": "Dilip Buildcon Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE917M01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DBOL",
      "NAME OF COMPANY": "Dhampur Bio Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-SEP-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0I3401014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DBREALTY",
      "NAME OF COMPANY": "D B Realty Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-FEB-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE879I01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DBSTOCKBRO",
      "NAME OF COMPANY": "DB (International) Stock Brokers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-FEB-2012",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE921B01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DCAL",
      "NAME OF COMPANY": "Dishman Carbogen Amcis Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-SEP-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE385W01011",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DCBBANK",
      "NAME OF COMPANY": "DCB Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-OCT-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE503A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DCI",
      "NAME OF COMPANY": "Dc Infotech And Communication Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-OCT-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0A1101019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DCM",
      "NAME OF COMPANY": "DCM  Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE498A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DCMFINSERV",
      "NAME OF COMPANY": "DCM Financial Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "21-MAY-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE891B01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DCMNVL",
      "NAME OF COMPANY": "DCM Nouvelle Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE08KP01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DCMSHRIRAM",
      "NAME OF COMPANY": "DCM Shriram Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE499A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DCMSRIND",
      "NAME OF COMPANY": "DCM Shriram Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-DEC-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE843D01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DCW",
      "NAME OF COMPANY": "DCW Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAY-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE500A01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DCXINDIA",
      "NAME OF COMPANY": "DCX Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-NOV-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0KL801015",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DECCANCE",
      "NAME OF COMPANY": "Deccan Cements Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-AUG-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE583C01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DEEPAKFERT",
      "NAME OF COMPANY": "Deepak Fertilizers and Petrochemicals Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JAN-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE501A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DEEPAKNTR",
      "NAME OF COMPANY": "Deepak Nitrite Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE288B01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DEEPENR",
      "NAME OF COMPANY": "DEEP ENERGY RESOURCES LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE677H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DEEPINDS",
      "NAME OF COMPANY": "Deep Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-APR-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0FHS01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DELHIVERY",
      "NAME OF COMPANY": "Delhivery Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAY-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE148O01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DELPHIFX",
      "NAME OF COMPANY": "DELPHI WORLD MONEY LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUN-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE726L01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DELTACORP",
      "NAME OF COMPANY": "Delta Corp Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE124G01033",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DELTAMAGNT",
      "NAME OF COMPANY": "Delta Manufacturing Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE393A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DEN",
      "NAME OF COMPANY": "Den Networks Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-NOV-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE947J01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DENORA",
      "NAME OF COMPANY": "De Nora India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-AUG-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE244A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DEVIT",
      "NAME OF COMPANY": "Dev Information Technology Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE060X01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DEVYANI",
      "NAME OF COMPANY": "Devyani International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-AUG-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE872J01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DGCONTENT",
      "NAME OF COMPANY": "Digicontent Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUN-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03JI01017",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DHAMPURSUG",
      "NAME OF COMPANY": "Dhampur Sugar Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE041A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DHANBANK",
      "NAME OF COMPANY": "Dhanlaxmi Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE680A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DHANI",
      "NAME OF COMPANY": "Dhani Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-APR-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE274G01010",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DHANUKA",
      "NAME OF COMPANY": "Dhanuka Agritech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUN-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE435G01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DHARMAJ",
      "NAME OF COMPANY": "Dharmaj Crop Guard Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-DEC-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00OQ01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DHRUV",
      "NAME OF COMPANY": "Dhruv Consultancy Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE506Z01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DHUNINV",
      "NAME OF COMPANY": "Dhunseri Investments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-MAR-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE320L01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DIACABS",
      "NAME OF COMPANY": "Diamond Power Infrastructure Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "15-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE989C01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DIAMINESQ",
      "NAME OF COMPANY": "Diamines & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE591D01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DIAMONDYD",
      "NAME OF COMPANY": "Prataap Snacks Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-OCT-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE393P01035",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DICIND",
      "NAME OF COMPANY": "DIC India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-AUG-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE303A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DIGIDRIVE",
      "NAME OF COMPANY": "Digidrive Distributors Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-JAN-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0PSC01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DIGISPICE",
      "NAME OF COMPANY": "DiGiSPICE Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-MAY-2008",
      "PAID UP VALUE": 3,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE927C01020",
      "FACE VALUE": 3
    },
    {
      "SYMBOL": "DIGJAMLMTD",
      "NAME OF COMPANY": "Digjam Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE731U01028",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DIL",
      "NAME OF COMPANY": "Debock Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE411Y01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DISHTV",
      "NAME OF COMPANY": "Dish TV India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-APR-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE836F01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DIVGIITTS",
      "NAME OF COMPANY": "Divgi Torqtransfer Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAR-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE753U01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DIVISLAB",
      "NAME OF COMPANY": "Divi's Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAR-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE361B01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DIXON",
      "NAME OF COMPANY": "Dixon Technologies (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-SEP-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE935N01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DJML",
      "NAME OF COMPANY": "DJ Mediaprint & Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-DEC-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0B1K01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DLF",
      "NAME OF COMPANY": "DLF Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUL-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE271C01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DLINKINDIA",
      "NAME OF COMPANY": "D-Link (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-DEC-2009",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE250K01012",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DMART",
      "NAME OF COMPANY": "Avenue Supermarts Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-MAR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE192R01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DMCC",
      "NAME OF COMPANY": "DMCC SPECIALITY CHEMICALS LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE505A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DNAMEDIA",
      "NAME OF COMPANY": "Diligent Media Corporation Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-DEC-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE016M01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DODLA",
      "NAME OF COMPANY": "Dodla Dairy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE021O01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DOLATALGO",
      "NAME OF COMPANY": "Dolat Algotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JAN-2024",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE966A01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DOLLAR",
      "NAME OF COMPANY": "Dollar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-APR-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE325C01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DOLPHIN",
      "NAME OF COMPANY": "Dolphin Offshore Enterprises (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "21-AUG-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE920A01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DOMS",
      "NAME OF COMPANY": "DOMS Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE321T01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DONEAR",
      "NAME OF COMPANY": "Donear Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE668D01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DPABHUSHAN",
      "NAME OF COMPANY": "D. P. Abhushan Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-NOV-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE266Y01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DPSCLTD",
      "NAME OF COMPANY": "DPSC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-APR-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE360C01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DPWIRES",
      "NAME OF COMPANY": "D P Wires Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JAN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE864X01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DRCSYSTEMS",
      "NAME OF COMPANY": "DRC Systems India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-MAR-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03RS01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DREAMFOLKS",
      "NAME OF COMPANY": "Dreamfolks Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JS101016",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "DREDGECORP",
      "NAME OF COMPANY": "Dredging Corporation of India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "15-JAN-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE506A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DRREDDY",
      "NAME OF COMPANY": "Dr. Reddy's Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAY-2003",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE089A01023",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "DSSL",
      "NAME OF COMPANY": "Dynacons Systems & Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-DEC-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE417B01040",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DTIL",
      "NAME OF COMPANY": "Dhunseri Tea & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JAN-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE341R01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DUCON",
      "NAME OF COMPANY": "Ducon Infratechnologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "09-OCT-2012",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE741L01018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DVL",
      "NAME OF COMPANY": "Dhunseri Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE477B01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DWARKESH",
      "NAME OF COMPANY": "Dwarikesh Sugar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-DEC-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE366A01041",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "DYCL",
      "NAME OF COMPANY": "Dynamic Cables Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUL-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE600Y01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DYNAMATECH",
      "NAME OF COMPANY": "Dynamatic Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-SEP-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE221B01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "DYNPRO",
      "NAME OF COMPANY": "Dynemic Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE256H01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "E2E",
      "NAME OF COMPANY": "E2E Networks Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE255Z01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EASEMYTRIP",
      "NAME OF COMPANY": "Easy Trip Planners Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAR-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07O001026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EASTSILK",
      "NAME OF COMPANY": "Eastern Silk Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-JUL-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE962C01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ECLERX",
      "NAME OF COMPANY": "eClerx Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-DEC-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE738I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EDELWEISS",
      "NAME OF COMPANY": "Edelweiss Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-DEC-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE532F01054",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EDUCOMP",
      "NAME OF COMPANY": "Educomp Solutions Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "13-JAN-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE216H01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "EICHERMOT",
      "NAME OF COMPANY": "Eicher Motors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-SEP-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE066A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EIDPARRY",
      "NAME OF COMPANY": "EID Parry India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE126A01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EIFFL",
      "NAME OF COMPANY": "Euro India Fresh Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE546V01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EIHAHOTELS",
      "NAME OF COMPANY": "EIH Associated Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-APR-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE276C01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EIHOTEL",
      "NAME OF COMPANY": "EIH Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE230A01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "EIMCOELECO",
      "NAME OF COMPANY": "Eimco Elecon (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE158B01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EKC",
      "NAME OF COMPANY": "Everest Kanto Cylinder Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE184H01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ELDEHSG",
      "NAME OF COMPANY": "Eldeco Housing And Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE668G01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ELECON",
      "NAME OF COMPANY": "Elecon Engineering Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE205B01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ELECTCAST",
      "NAME OF COMPANY": "Electrosteel Castings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE086A01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ELECTHERM",
      "NAME OF COMPANY": "Electrotherm (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-AUG-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE822G01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ELGIEQUIP",
      "NAME OF COMPANY": "Elgi Equipments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-NOV-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE285A01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ELGIRUBCO",
      "NAME OF COMPANY": "Elgi Rubber Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-AUG-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE819L01012",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ELIN",
      "NAME OF COMPANY": "Elin Electronics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-DEC-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE050401020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "EMAMILTD",
      "NAME OF COMPANY": "Emami Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-AUG-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE548C01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EMAMIPAP",
      "NAME OF COMPANY": "Emami Paper Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAY-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE830C01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "EMAMIREAL",
      "NAME OF COMPANY": "Emami Realty Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-JUL-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE778K01012",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "EMIL",
      "NAME OF COMPANY": "Electronics Mart India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-OCT-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02YR01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EMKAY",
      "NAME OF COMPANY": "Emkay Global Financial Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-APR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE296H01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EMMBI",
      "NAME OF COMPANY": "Emmbi Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-FEB-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE753K01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EMSLIMITED",
      "NAME OF COMPANY": "EMS Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0OV601013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EMUDHRA",
      "NAME OF COMPANY": "eMudhra Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JUN-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01QM01018",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ENDURANCE",
      "NAME OF COMPANY": "Endurance Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-OCT-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE913H01037",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ENERGYDEV",
      "NAME OF COMPANY": "Energy Development Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-NOV-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE306C01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ENGINERSIN",
      "NAME OF COMPANY": "Engineers India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-AUG-1997",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE510A01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ENIL",
      "NAME OF COMPANY": "Entertainment Network (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE265F01028",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ENTERO",
      "NAME OF COMPANY": "Entero Healthcare Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE010601016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EPACK",
      "NAME OF COMPANY": "EPACK Durable Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JAN-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0G5901015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EPIGRAL",
      "NAME OF COMPANY": "Epigral Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE071N01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EPL",
      "NAME OF COMPANY": "EPL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-FEB-2002",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE255A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "EQUIPPP",
      "NAME OF COMPANY": "Equippp Social Impact Technologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-MAY-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE217G01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EQUITASBNK",
      "NAME OF COMPANY": "Equitas Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE063P01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ERIS",
      "NAME OF COMPANY": "Eris Lifesciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUN-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE406M01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EROSMEDIA",
      "NAME OF COMPANY": "Eros International Media Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE416L01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ESABINDIA",
      "NAME OF COMPANY": "Esab India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE284A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ESAFSFB",
      "NAME OF COMPANY": "ESAF Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-NOV-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE818W01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ESCORTS",
      "NAME OF COMPANY": "Escorts Kubota Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE042A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ESSARSHPNG",
      "NAME OF COMPANY": "Essar Shipping Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-NOV-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE122M01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ESSENTIA",
      "NAME OF COMPANY": "Integra Essentia Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-AUG-2013",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE418N01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ESTER",
      "NAME OF COMPANY": "Ester Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2011",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE778B01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ETHOSLTD",
      "NAME OF COMPANY": "Ethos Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE04TZ01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EUROTEXIND",
      "NAME OF COMPANY": "Eurotex Industries and Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-JAN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE022C01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EVEREADY",
      "NAME OF COMPANY": "Eveready Industries India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-APR-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE128A01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "EVERESTIND",
      "NAME OF COMPANY": "Everest Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE295A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EXCEL",
      "NAME OF COMPANY": "Excel Realty N Infra Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-AUG-2009",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE688J01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EXCELINDUS",
      "NAME OF COMPANY": "Excel Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-2004",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE369A01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "EXIDEIND",
      "NAME OF COMPANY": "Exide Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUN-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE302A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "EXPLEOSOL",
      "NAME OF COMPANY": "Expleo Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-OCT-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE201K01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "EXXARO",
      "NAME OF COMPANY": "Exxaro Tiles Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0GFE01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FACT",
      "NAME OF COMPANY": "Fertilizers and Chemicals Travancore Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE188A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FAIRCHEMOR",
      "NAME OF COMPANY": "Fairchem Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-DEC-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0DNW01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FAZE3Q",
      "NAME OF COMPANY": "Faze Three Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE963C01033",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FCL",
      "NAME OF COMPANY": "Fineotex Chemical Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JAN-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE045J01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "FCONSUMER",
      "NAME OF COMPANY": "Future Consumer Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-JUL-2013",
      "PAID UP VALUE": 6,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE220J01025",
      "FACE VALUE": 6
    },
    {
      "SYMBOL": "FCSSOFT",
      "NAME OF COMPANY": "FCS Software Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-SEP-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE512B01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "FDC",
      "NAME OF COMPANY": "FDC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-AUG-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE258B01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "FEDERALBNK",
      "NAME OF COMPANY": "The Federal Bank  Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE171A01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "FEDFINA",
      "NAME OF COMPANY": "Fedbank Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-NOV-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE007N01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FELDVR",
      "NAME OF COMPANY": "Future Enterprises Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-FEB-2009",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "IN9623B01058",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "FIBERWEB",
      "NAME OF COMPANY": "Fiberweb (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE296C01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FIEMIND",
      "NAME OF COMPANY": "Fiem Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-OCT-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE737H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FILATEX",
      "NAME OF COMPANY": "Filatex India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-AUG-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE816B01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "FINCABLES",
      "NAME OF COMPANY": "Finolex Cables Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE235A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "FINEORG",
      "NAME OF COMPANY": "Fine Organic Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-JUL-2018",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE686Y01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "FINOPB",
      "NAME OF COMPANY": "Fino Payments Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02NC01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FINPIPE",
      "NAME OF COMPANY": "Finolex Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE183A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "FIVESTAR",
      "NAME OF COMPANY": "Five-Star Business Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE128S01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "FLAIR",
      "NAME OF COMPANY": "Flair Writing Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-DEC-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00Y201027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "FLEXITUFF",
      "NAME OF COMPANY": "Flexituff Ventures International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-OCT-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE060J01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FLFL",
      "NAME OF COMPANY": "Future Lifestyle Fashions Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "01-OCT-2013",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE452O01016",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "FLUOROCHEM",
      "NAME OF COMPANY": "Gujarat Fluorochemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-OCT-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE09N301011",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "FMGOETZE",
      "NAME OF COMPANY": "Federal-Mogul Goetze (India) Limited.",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE529A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FMNL",
      "NAME OF COMPANY": "Future Market Networks Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "31-DEC-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE360L01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FOCUS",
      "NAME OF COMPANY": "Focus Lighting and Fixtures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-NOV-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE593W01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "FOODSIN",
      "NAME OF COMPANY": "Foods & Inns Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-NOV-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE976E01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "FORCEMOT",
      "NAME OF COMPANY": "FORCE MOTORS LTD",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE451A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FORTIS",
      "NAME OF COMPANY": "Fortis Healthcare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE061F01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FOSECOIND",
      "NAME OF COMPANY": "Foseco India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAY-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE519A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FSC",
      "NAME OF COMPANY": "Future Supply Chain Solutions Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "18-DEC-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE935Q01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FSL",
      "NAME OF COMPANY": "Firstsource Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE684F01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "FUSION",
      "NAME OF COMPANY": "Fusion Micro Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE139R01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GABRIEL",
      "NAME OF COMPANY": "Gabriel India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-APR-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE524A01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GAEL",
      "NAME OF COMPANY": "Gujarat Ambuja Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-OCT-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE036B01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GAIL",
      "NAME OF COMPANY": "GAIL (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-APR-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE129A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GALAXYSURF",
      "NAME OF COMPANY": "Galaxy Surfactants Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE600K01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GALLANTT",
      "NAME OF COMPANY": "Gallantt Ispat Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-APR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE297H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GANDHAR",
      "NAME OF COMPANY": "Gandhar Oil Refinery (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-NOV-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE717W01049",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GANDHITUBE",
      "NAME OF COMPANY": "Gandhi Special Tubes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-JAN-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE524B01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GANECOS",
      "NAME OF COMPANY": "Ganesha Ecosphere Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE845D01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GANESHBE",
      "NAME OF COMPANY": "Ganesh Benzoplast Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-SEP-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE388A01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GANESHHOUC",
      "NAME OF COMPANY": "Ganesh Housing Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-MAR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE460C01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GANGAFORGE",
      "NAME OF COMPANY": "Ganga Forging Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-JUL-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE691Z01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GANGESSECU",
      "NAME OF COMPANY": "Ganges Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE335W01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GARFIBRES",
      "NAME OF COMPANY": "Garware Technical Fibres Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE276A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GATECH",
      "NAME OF COMPANY": "GACM Technologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-JUL-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE224E01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GATECHDVR",
      "NAME OF COMPANY": "GACM Technologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-OCT-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE224E01036",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GATEWAY",
      "NAME OF COMPANY": "Gateway Distriparks Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-MAR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE079J01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GAYAPROJ",
      "NAME OF COMPANY": "Gayatri Projects Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "22-AUG-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE336H01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GEECEE",
      "NAME OF COMPANY": "GeeCee Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-OCT-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE916G01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GEEKAYWIRE",
      "NAME OF COMPANY": "Geekay Wires Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-MAR-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE669X01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GENCON",
      "NAME OF COMPANY": "Generic Engineering Construction and Projects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE854S01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GENESYS",
      "NAME OF COMPANY": "Genesys International Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JAN-2003",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE727B01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GENSOL",
      "NAME OF COMPANY": "Gensol Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE06H201014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GENUSPAPER",
      "NAME OF COMPANY": "Genus Paper & Boards Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE949P01018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GENUSPOWER",
      "NAME OF COMPANY": "Genus Power Infrastructures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JUL-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE955D01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GEOJITFSL",
      "NAME OF COMPANY": "Geojit Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JUL-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE007B01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GEPIL",
      "NAME OF COMPANY": "GE Power India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-APR-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE878A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GESHIP",
      "NAME OF COMPANY": "The Great Eastern Shipping Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-NOV-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE017A01032",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GET&D",
      "NAME OF COMPANY": "GE T&D India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-JUN-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE200A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GFLLIMITED",
      "NAME OF COMPANY": "GFL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAY-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE538A01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GHCL",
      "NAME OF COMPANY": "GHCL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-JUL-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE539A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GHCLTEXTIL",
      "NAME OF COMPANY": "GHCL Textiles Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JUN-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0PA801013",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GICHSGFIN",
      "NAME OF COMPANY": "GIC Housing Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAY-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE289B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GICRE",
      "NAME OF COMPANY": "General Insurance Corporation of India",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-OCT-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE481Y01014",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GILLANDERS",
      "NAME OF COMPANY": "Gillanders Arbuthnot & Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-DEC-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE047B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GILLETTE",
      "NAME OF COMPANY": "Gillette India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JUL-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE322A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GINNIFILA",
      "NAME OF COMPANY": "Ginni Filaments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE424C01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GIPCL",
      "NAME OF COMPANY": "Gujarat Industries Power Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE162A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GKWLIMITED",
      "NAME OF COMPANY": "GKW Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUL-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE528A01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GLAND",
      "NAME OF COMPANY": "Gland Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-NOV-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE068V01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GLAXO",
      "NAME OF COMPANY": "GlaxoSmithKline Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE159A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GLENMARK",
      "NAME OF COMPANY": "Glenmark Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-FEB-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE935A01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GLFL",
      "NAME OF COMPANY": "Gujarat Lease Financing Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE540A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GLOBAL",
      "NAME OF COMPANY": "Global Education Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-DEC-2020",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE291W01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GLOBALVECT",
      "NAME OF COMPANY": "Global Vectra Helicorp Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-OCT-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE792H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GLOBE",
      "NAME OF COMPANY": "Globe Textiles (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-OCT-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE581X01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GLOBUSSPR",
      "NAME OF COMPANY": "Globus Spirits Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-SEP-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE615I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GLS",
      "NAME OF COMPANY": "Glenmark Life Sciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-AUG-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03Q201024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GMBREW",
      "NAME OF COMPANY": "GM Breweries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE075D01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GMDCLTD",
      "NAME OF COMPANY": "Gujarat Mineral Development Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-DEC-1997",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE131A01031",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GMMPFAUDLR",
      "NAME OF COMPANY": "GMM Pfaudler Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAR-2018",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE541A01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GMRINFRA",
      "NAME OF COMPANY": "GMR Airports Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-AUG-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE776C01039",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GMRP&UI",
      "NAME OF COMPANY": "GMR Power and Urban Infra Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0CU601026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GNA",
      "NAME OF COMPANY": "GNA Axles Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-SEP-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE934S01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GNFC",
      "NAME OF COMPANY": "Gujarat Narmada Valley Fertilizers and Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE113A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GOACARBON",
      "NAME OF COMPANY": "Goa Carbon Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUN-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE426D01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GOCLCORP",
      "NAME OF COMPANY": "GOCL Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-JUN-2014",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE077F01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GOCOLORS",
      "NAME OF COMPANY": "Go Fashion (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0BJS01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GODFRYPHLP",
      "NAME OF COMPANY": "Godfrey Phillips India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUL-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE260B01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GODHA",
      "NAME OF COMPANY": "Godha Cabcon & Insulation Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "24-DEC-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE925Y01036",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GODREJAGRO",
      "NAME OF COMPANY": "Godrej Agrovet Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-OCT-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE850D01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GODREJCP",
      "NAME OF COMPANY": "Godrej Consumer Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2001",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE102D01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GODREJIND",
      "NAME OF COMPANY": "Godrej Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-FEB-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE233A01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GODREJPROP",
      "NAME OF COMPANY": "Godrej Properties Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JAN-2010",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE484J01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GOKEX",
      "NAME OF COMPANY": "Gokaldas Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-APR-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE887G01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GOKUL",
      "NAME OF COMPANY": "Gokul Refoils and Solvent Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-JUN-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE020J01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GOKULAGRO",
      "NAME OF COMPANY": "Gokul Agro Resources Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-MAR-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE314T01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GOLDENTOBC",
      "NAME OF COMPANY": "Golden Tobacco Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE973A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GOLDIAM",
      "NAME OF COMPANY": "Goldiam International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-AUG-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE025B01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GOLDTECH",
      "NAME OF COMPANY": "AION-TECH SOLUTIONS LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "11-APR-2001",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE805A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GOODLUCK",
      "NAME OF COMPANY": "Goodluck India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JAN-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE127I01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GOYALALUM",
      "NAME OF COMPANY": "Goyal Aluminiums Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-NOV-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE705X01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GPIL",
      "NAME OF COMPANY": "Godawari Power And Ispat limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-APR-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE177H01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GPPL",
      "NAME OF COMPANY": "Gujarat Pipavav Port Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-SEP-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE517F01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GPTINFRA",
      "NAME OF COMPANY": "GPT Infraprojects Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-JUL-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE390G01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GRANULES",
      "NAME OF COMPANY": "Granules India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE101D01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GRAPHITE",
      "NAME OF COMPANY": "Graphite India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-FEB-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE371A01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GRASIM",
      "NAME OF COMPANY": "Grasim Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE047A01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GRAVITA",
      "NAME OF COMPANY": "Gravita India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-NOV-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE024L01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GREAVESCOT",
      "NAME OF COMPANY": "Greaves Cotton Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-SEP-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE224A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GREENLAM",
      "NAME OF COMPANY": "Greenlam Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-MAR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE544R01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GREENPANEL",
      "NAME OF COMPANY": "Greenpanel Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-OCT-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE08ZM01014",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GREENPLY",
      "NAME OF COMPANY": "Greenply Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-MAR-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE461C01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GREENPOWER",
      "NAME OF COMPANY": "Orient Green Power Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE999K01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GRINDWELL",
      "NAME OF COMPANY": "Grindwell Norton Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-SEP-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE536A01023",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GRINFRA",
      "NAME OF COMPANY": "G R Infraprojects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE201P01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GRMOVER",
      "NAME OF COMPANY": "GRM Overseas Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-SEP-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE192H01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GROBTEA",
      "NAME OF COMPANY": "The Grob Tea Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUL-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE646C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GRPLTD",
      "NAME OF COMPANY": "GRP Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-FEB-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE137I01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GRSE",
      "NAME OF COMPANY": "Garden Reach Shipbuilders & Engineers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-OCT-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE382Z01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GRWRHITECH",
      "NAME OF COMPANY": "Garware Hi-Tech Films Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-FEB-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE291A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GSFC",
      "NAME OF COMPANY": "Gujarat State Fertilizers & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE026A01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GSLSU",
      "NAME OF COMPANY": "Global Surfaces Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JSX01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GSPL",
      "NAME OF COMPANY": "Gujarat State Petronet Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE246F01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GSS",
      "NAME OF COMPANY": "GSS Infotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAR-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE871H01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GTECJAINX",
      "NAME OF COMPANY": "G-TEC JAINX EDUCATION LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-NOV-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE586X01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GTL",
      "NAME OF COMPANY": "GTL Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE043A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GTLINFRA",
      "NAME OF COMPANY": "GTL Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-NOV-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE221H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GTPL",
      "NAME OF COMPANY": "GTPL Hathway Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUL-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE869I01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GUFICBIO",
      "NAME OF COMPANY": "Gufic Biosciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-OCT-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE742B01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GUJALKALI",
      "NAME OF COMPANY": "Gujarat Alkalies and Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-AUG-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE186A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GUJAPOLLO",
      "NAME OF COMPANY": "Gujarat Apollo Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-JUN-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE826C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GUJGASLTD",
      "NAME OF COMPANY": "Gujarat Gas Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-SEP-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE844O01030",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GUJRAFFIA",
      "NAME OF COMPANY": "Gujarat Raffia Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "09-OCT-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE610B01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "GULFOILLUB",
      "NAME OF COMPANY": "Gulf Oil Lubricants India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-JUL-2014",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE635Q01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "GULFPETRO",
      "NAME OF COMPANY": "GP Petroleums Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-SEP-2004",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE586G01017",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "GULPOLY",
      "NAME OF COMPANY": "Gulshan Polyols Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE255D01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GVKPIL",
      "NAME OF COMPANY": "GVK Power & Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-FEB-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE251H01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "GVPTECH",
      "NAME OF COMPANY": "GVP Infotech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-SEP-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE382T01030",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HAL",
      "NAME OF COMPANY": "Hindustan Aeronautics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-MAR-2018",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE066F01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "HAPPSTMNDS",
      "NAME OF COMPANY": "Happiest Minds Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-SEP-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE419U01012",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HAPPYFORGE",
      "NAME OF COMPANY": "Happy Forgings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE330T01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HARDWYN",
      "NAME OF COMPANY": "Hardwyn India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE626Z01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HARIOMPIPE",
      "NAME OF COMPANY": "Hariom Pipe Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00EV01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HARRMALAYA",
      "NAME OF COMPANY": "Harrisons  Malayalam Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE544A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HARSHA",
      "NAME OF COMPANY": "Harsha Engineers International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-SEP-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JUS01029",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HATHWAY",
      "NAME OF COMPANY": "Hathway Cable & Datacom Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-FEB-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE982F01036",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HATSUN",
      "NAME OF COMPANY": "Hatsun Agro Product Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2014",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE473B01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HAVELLS",
      "NAME OF COMPANY": "Havells India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-MAR-2001",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE176B01034",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HAVISHA",
      "NAME OF COMPANY": "Sri Havisha Hospitality and Infrastructure Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-FEB-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE293B01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HBLPOWER",
      "NAME OF COMPANY": "HBL Power Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JAN-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE292B01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HBSL",
      "NAME OF COMPANY": "HB Stockholdings Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-JUL-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE550B01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HCC",
      "NAME OF COMPANY": "Hindustan Construction Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE549A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HCG",
      "NAME OF COMPANY": "Healthcare Global Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE075I01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HCL-INSYS",
      "NAME OF COMPANY": "HCL Infosystems Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-JAN-1997",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE236A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HCLTECH",
      "NAME OF COMPANY": "HCL Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JAN-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE860A01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HDFCAMC",
      "NAME OF COMPANY": "HDFC Asset Management Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-AUG-2018",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE127D01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "HDFCBANK",
      "NAME OF COMPANY": "HDFC Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-NOV-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE040A01034",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HDFCLIFE",
      "NAME OF COMPANY": "HDFC Life Insurance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-NOV-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE795G01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HEADSUP",
      "NAME OF COMPANY": "Heads UP Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE759V01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HECPROJECT",
      "NAME OF COMPANY": "HEC Infra Projects Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE558R01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HEG",
      "NAME OF COMPANY": "HEG Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE545A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HEIDELBERG",
      "NAME OF COMPANY": "HeidelbergCement India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE578A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HEMIPROP",
      "NAME OF COMPANY": "Hemisphere Properties India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0AJG01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HERANBA",
      "NAME OF COMPANY": "Heranba Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE694N01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HERCULES",
      "NAME OF COMPANY": "Hercules Hoists Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-FEB-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE688E01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HERITGFOOD",
      "NAME OF COMPANY": "Heritage Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-NOV-1996",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE978A01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "HEROMOTOCO",
      "NAME OF COMPANY": "Hero MotoCorp Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-APR-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE158A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HESTERBIO",
      "NAME OF COMPANY": "Hester Biosciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-MAR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE782E01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HEUBACHIND",
      "NAME OF COMPANY": "Heubach Colorants India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE492A01029",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HEXATRADEX",
      "NAME OF COMPANY": "Hexa Tradex Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-APR-2012",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE750M01017",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HFCL",
      "NAME OF COMPANY": "HFCL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE548A01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HGINFRA",
      "NAME OF COMPANY": "H.G. Infra Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE926X01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HGS",
      "NAME OF COMPANY": "Hinduja Global Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUN-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE170I01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HIKAL",
      "NAME OF COMPANY": "Hikal Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE475B01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HIL",
      "NAME OF COMPANY": "HIL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-APR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE557A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HILTON",
      "NAME OF COMPANY": "Hilton Metal Forging Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAY-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE788H01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HIMATSEIDE",
      "NAME OF COMPANY": "Himatsingka Seide Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE049A01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "HINDALCO",
      "NAME OF COMPANY": "Hindalco Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JAN-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE038A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HINDCOMPOS",
      "NAME OF COMPANY": "Hindustan Composites Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAY-1996",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE310C01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "HINDCON",
      "NAME OF COMPANY": "Hindcon Chemicals Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "05-JUL-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE642Y01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HINDCOPPER",
      "NAME OF COMPANY": "Hindustan Copper Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-SEP-2010",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE531E01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "HINDMOTORS",
      "NAME OF COMPANY": "Hindustan Motors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-FEB-2011",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE253A01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "HINDOILEXP",
      "NAME OF COMPANY": "Hindustan Oil Exploration Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-SEP-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE345A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HINDPETRO",
      "NAME OF COMPANY": "Hindustan Petroleum Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUN-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE094A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HINDUNILVR",
      "NAME OF COMPANY": "Hindustan Unilever Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JUL-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE030A01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HINDWAREAP",
      "NAME OF COMPANY": "Hindware Home Innovation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE05AN01011",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HINDZINC",
      "NAME OF COMPANY": "Hindustan Zinc Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE267A01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HIRECT",
      "NAME OF COMPANY": "Hind Rectifiers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE835D01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HISARMETAL",
      "NAME OF COMPANY": "Hisar Metal Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JAN-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE598C01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HITECH",
      "NAME OF COMPANY": "Hi-Tech Pipes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAY-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE106T01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HITECHCORP",
      "NAME OF COMPANY": "Hitech Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE120D01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HITECHGEAR",
      "NAME OF COMPANY": "The Hi-Tech Gears Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE127B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HLEGLAS",
      "NAME OF COMPANY": "HLE Glascoat Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-FEB-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE461D01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HLVLTD",
      "NAME OF COMPANY": "HLV LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE102A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HMAAGRO",
      "NAME OF COMPANY": "HMA Agro Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUL-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0ECP01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HMT",
      "NAME OF COMPANY": "HMT Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "29-AUG-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE262A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HMVL",
      "NAME OF COMPANY": "Hindustan Media Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JUL-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE871K01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HNDFDS",
      "NAME OF COMPANY": "Hindustan Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JUN-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE254N01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HOMEFIRST",
      "NAME OF COMPANY": "Home First Finance Company India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-FEB-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE481N01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HONASA",
      "NAME OF COMPANY": "Honasa Consumer Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-NOV-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0J5401028",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HONAUT",
      "NAME OF COMPANY": "Honeywell Automation India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUL-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE671A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HONDAPOWER",
      "NAME OF COMPANY": "Honda India Power Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE634A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HOVS",
      "NAME OF COMPANY": "HOV Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-SEP-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE596H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HPAL",
      "NAME OF COMPANY": "HP Adhesives Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0GSL01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HPIL",
      "NAME OF COMPANY": "Hindprakash Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE05X901010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HPL",
      "NAME OF COMPANY": "HPL Electric & Power Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-OCT-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE495S01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HSCL",
      "NAME OF COMPANY": "Himadri Speciality Chemical Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-MAR-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE019C01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "HTMEDIA",
      "NAME OF COMPANY": "HT Media Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-SEP-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE501G01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HUBTOWN",
      "NAME OF COMPANY": "Hubtown Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE703H01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HUDCO",
      "NAME OF COMPANY": "Housing & Urban Development Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAY-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE031A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "HUHTAMAKI",
      "NAME OF COMPANY": "Huhtamaki India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-OCT-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE275B01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "HYBRIDFIN",
      "NAME OF COMPANY": "Hybrid Financial Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "05-DEC-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE965B01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "IBREALEST",
      "NAME OF COMPANY": "Indiabulls Real Estate Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE069I01010",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IBULHSGFIN",
      "NAME OF COMPANY": "Indiabulls Housing Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUL-2013",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE148I01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ICDSLTD",
      "NAME OF COMPANY": "ICDS Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-NOV-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE613B01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ICEMAKE",
      "NAME OF COMPANY": "Ice Make Refrigeration Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE520Y01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ICICIBANK",
      "NAME OF COMPANY": "ICICI Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-SEP-1997",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE090A01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ICICIGI",
      "NAME OF COMPANY": "ICICI Lombard General Insurance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-SEP-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE765G01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ICICIPRULI",
      "NAME OF COMPANY": "ICICI Prudential Life Insurance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE726G01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ICIL",
      "NAME OF COMPANY": "Indo Count Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-SEP-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE483B01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ICRA",
      "NAME OF COMPANY": "ICRA Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-APR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE725G01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IDBI",
      "NAME OF COMPANY": "IDBI Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE008A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IDEA",
      "NAME OF COMPANY": "Vodafone Idea Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE669E01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IDEAFORGE",
      "NAME OF COMPANY": "Ideaforge Technology Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE349Y01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IDFC",
      "NAME OF COMPANY": "IDFC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-AUG-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE043D01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IDFCFIRSTB",
      "NAME OF COMPANY": "IDFC First Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE092T01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IEL",
      "NAME OF COMPANY": "Indiabulls Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE059901020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IEX",
      "NAME OF COMPANY": "Indian Energy Exchange Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-OCT-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE022Q01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "IFBAGRO",
      "NAME OF COMPANY": "IFB Agro Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE076C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IFBIND",
      "NAME OF COMPANY": "IFB Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE559A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IFCI",
      "NAME OF COMPANY": "IFCI Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-APR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE039A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IFGLEXPOR",
      "NAME OF COMPANY": "IFGL Refractories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-NOV-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE133Y01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IGARASHI",
      "NAME OF COMPANY": "Igarashi Motors India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-OCT-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE188B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IGL",
      "NAME OF COMPANY": "Indraprastha Gas Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE203G01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IGPL",
      "NAME OF COMPANY": "IG Petrochemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JAN-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE204A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IIFL",
      "NAME OF COMPANY": "IIFL Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE530B01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IIFLSEC",
      "NAME OF COMPANY": "IIFL Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE489L01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IITL",
      "NAME OF COMPANY": "Industrial Investment Trust Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-AUG-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE886A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IKIO",
      "NAME OF COMPANY": "IKIO Lighting Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0LOJ01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IL&FSENGG",
      "NAME OF COMPANY": "IL&FS Engineering and Construction Company Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "25-OCT-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE369I01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IL&FSTRANS",
      "NAME OF COMPANY": "IL&FS Transportation Networks Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "30-MAR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE975G01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IMAGICAA",
      "NAME OF COMPANY": "Imagicaaworld Entertainment Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-APR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE172N01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IMFA",
      "NAME OF COMPANY": "Indian Metals & Ferro Alloys Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUL-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE919H01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IMPAL",
      "NAME OF COMPANY": "India Motor Parts and Accessories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-OCT-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE547E01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IMPEXFERRO",
      "NAME OF COMPANY": "Impex Ferro Tech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-FEB-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE691G01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INCREDIBLE",
      "NAME OF COMPANY": "INCREDIBLE INDUSTRIES LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "01-JUL-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE452L01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDBANK",
      "NAME OF COMPANY": "Indbank Merchant Banking Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-OCT-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE841B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDHOTEL",
      "NAME OF COMPANY": "The Indian Hotels Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JUL-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE053A01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "INDIACEM",
      "NAME OF COMPANY": "The India Cements Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAY-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE383A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDIAGLYCO",
      "NAME OF COMPANY": "India Glycols Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JUL-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE560A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDIAMART",
      "NAME OF COMPANY": "Indiamart Intermesh Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE933S01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDIANB",
      "NAME OF COMPANY": "Indian Bank",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE562A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDIANCARD",
      "NAME OF COMPANY": "Indian Card Clothing Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JAN-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE061A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDIANHUME",
      "NAME OF COMPANY": "Indian Hume Pipe Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-AUG-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE323C01030",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "INDIASHLTR",
      "NAME OF COMPANY": "India Shelter Finance Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE922K01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "INDIGO",
      "NAME OF COMPANY": "InterGlobe Aviation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-NOV-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE646L01027",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDIGOPNTS",
      "NAME OF COMPANY": "Indigo Paints Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-FEB-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE09VQ01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDNIPPON",
      "NAME OF COMPANY": "India Nippon Electricals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAY-1997",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE092B01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "INDOAMIN",
      "NAME OF COMPANY": "Indo Amines Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-APR-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE760F01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "INDOBORAX",
      "NAME OF COMPANY": "Indo Borax & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE803D01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "INDOCO",
      "NAME OF COMPANY": "Indoco Remedies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JAN-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE873D01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "INDORAMA",
      "NAME OF COMPANY": "Indo Rama Synthetics (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE156A01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDOSTAR",
      "NAME OF COMPANY": "IndoStar Capital Finance Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "21-MAY-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE896L01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDOTECH",
      "NAME OF COMPANY": "Indo Tech Transformers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-MAR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE332H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDOTHAI",
      "NAME OF COMPANY": "Indo Thai Securities Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-NOV-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE337M01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDOWIND",
      "NAME OF COMPANY": "Indowind Energy Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-SEP-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE227G01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDRAMEDCO",
      "NAME OF COMPANY": "Indraprastha Medical Corporation Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-APR-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE681B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDSWFTLAB",
      "NAME OF COMPANY": "Ind-Swift Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-JUL-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE915B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDSWFTLTD",
      "NAME OF COMPANY": "Ind-Swift Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE788B01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "INDTERRAIN",
      "NAME OF COMPANY": "Indian Terrain Fashions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-MAR-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE611L01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "INDUSINDBK",
      "NAME OF COMPANY": "IndusInd Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE095A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INDUSTOWER",
      "NAME OF COMPANY": "Indus Towers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-DEC-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE121J01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INFIBEAM",
      "NAME OF COMPANY": "Infibeam Avenues Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-APR-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE483S01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "INFOBEAN",
      "NAME OF COMPANY": "InfoBeans Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE344S01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INFOMEDIA",
      "NAME OF COMPANY": "Infomedia Press Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-OCT-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE669A01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INFY",
      "NAME OF COMPANY": "Infosys Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE009A01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "INGERRAND",
      "NAME OF COMPANY": "Ingersoll Rand (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-APR-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE177A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INNOVACAP",
      "NAME OF COMPANY": "Innova Captab Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-DEC-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0DUT01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INOXGREEN",
      "NAME OF COMPANY": "Inox Green Energy Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE510W01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INOXINDIA",
      "NAME OF COMPANY": "INOX India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-DEC-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE616N01034",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "INOXWIND",
      "NAME OF COMPANY": "Inox Wind Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-APR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE066P01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INSECTICID",
      "NAME OF COMPANY": "Insecticides (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAY-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE070I01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "INTELLECT",
      "NAME OF COMPANY": "Intellect Design Arena Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-DEC-2014",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE306R01017",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "INTENTECH",
      "NAME OF COMPANY": "Intense Technologies Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-MAR-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE781A01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "INTLCONV",
      "NAME OF COMPANY": "International Conveyors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-SEP-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE575C01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "INVENTURE",
      "NAME OF COMPANY": "Inventure Growth & Securities Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-AUG-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE878H01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "IOB",
      "NAME OF COMPANY": "Indian Overseas Bank",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-DEC-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE565A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IOC",
      "NAME OF COMPANY": "Indian Oil Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUL-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE242A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IOLCP",
      "NAME OF COMPANY": "IOL Chemicals and Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-NOV-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE485C01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IONEXCHANG",
      "NAME OF COMPANY": "ION Exchange (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-FEB-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE570A01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "IPCALAB",
      "NAME OF COMPANY": "IPCA Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE571A01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "IPL",
      "NAME OF COMPANY": "India Pesticides Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUL-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0D6701023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "IRB",
      "NAME OF COMPANY": "IRB Infrastructure Developers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-FEB-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE821I01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "IRCON",
      "NAME OF COMPANY": "Ircon International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-SEP-2018",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE962Y01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IRCTC",
      "NAME OF COMPANY": "Indian Railway Catering And Tourism Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-OCT-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE335Y01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IREDA",
      "NAME OF COMPANY": "Indian Renewable Energy Development Agency Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-NOV-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE202E01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IRFC",
      "NAME OF COMPANY": "Indian Railway Finance Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JAN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE053F01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IRIS",
      "NAME OF COMPANY": "Iris Business Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE864K01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IRISDOREME",
      "NAME OF COMPANY": "Iris Clothings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-FEB-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01GN01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IRMENERGY",
      "NAME OF COMPANY": "IRM Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07U701015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ISEC",
      "NAME OF COMPANY": "ICICI Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-APR-2018",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE763G01038",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ISFT",
      "NAME OF COMPANY": "Intrasoft Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE566K01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ISGEC",
      "NAME OF COMPANY": "Isgec Heavy Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAY-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE858B01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ISMTLTD",
      "NAME OF COMPANY": "ISMT Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-AUG-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE732F01019",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ITC",
      "NAME OF COMPANY": "ITC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE154A01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ITDC",
      "NAME OF COMPANY": "India Tourism Development Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-DEC-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE353K01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ITDCEM",
      "NAME OF COMPANY": "ITD Cementation India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-FEB-1999",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE686A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ITI",
      "NAME OF COMPANY": "ITI Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-SEP-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE248A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IVC",
      "NAME OF COMPANY": "IL&FS Investment Managers Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "15-SEP-1999",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE050B01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "IVP",
      "NAME OF COMPANY": "IVP Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE043C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IWEL",
      "NAME OF COMPANY": "Inox Wind Energy Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-JUN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0FLR01028",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "IZMO",
      "NAME OF COMPANY": "IZMO Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "05-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE848A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "J&KBANK",
      "NAME OF COMPANY": "The Jammu & Kashmir Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-JUL-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE168A01041",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JAGRAN",
      "NAME OF COMPANY": "Jagran Prakashan Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-FEB-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE199G01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JAGSNPHARM",
      "NAME OF COMPANY": "Jagsonpal Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE048B01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "JAIBALAJI",
      "NAME OF COMPANY": "Jai Balaji Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "09-DEC-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE091G01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JAICORPLTD",
      "NAME OF COMPANY": "Jai Corp Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-NOV-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE070D01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JAIPURKURT",
      "NAME OF COMPANY": "Nandani Creation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-SEP-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE696V01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JAMNAAUTO",
      "NAME OF COMPANY": "Jamna Auto Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-DEC-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE039C01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JASH",
      "NAME OF COMPANY": "Jash Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-OCT-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE039O01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JAYAGROGN",
      "NAME OF COMPANY": "Jayant Agro Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-APR-1996",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE785A01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "JAYBARMARU",
      "NAME OF COMPANY": "Jay Bharat Maruti Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JAN-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE571B01036",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JAYNECOIND",
      "NAME OF COMPANY": "Jayaswal Neco Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE854B01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JAYSREETEA",
      "NAME OF COMPANY": "Jayshree Tea & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE364A01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "JBCHEPHARM",
      "NAME OF COMPANY": "JB Chemicals & Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-APR-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE572A01036",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JBMA",
      "NAME OF COMPANY": "JBM Auto Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-DEC-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE927D01044",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JCHAC",
      "NAME OF COMPANY": "Johnson Controls - Hitachi Air Conditioning India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JAN-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE782A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JETAIRWAYS",
      "NAME OF COMPANY": "Jet Airways (India) Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "14-MAR-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE802G01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JETFREIGHT",
      "NAME OF COMPANY": "Jet Freight Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-DEC-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE982V01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "JHS",
      "NAME OF COMPANY": "JHS Svendgaard Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-OCT-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE544H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JINDALPHOT",
      "NAME OF COMPANY": "Jindal Photo Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE796G01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JINDALPOLY",
      "NAME OF COMPANY": "Jindal Poly Films Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE197D01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JINDALSAW",
      "NAME OF COMPANY": "Jindal Saw Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-APR-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE324A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JINDALSTEL",
      "NAME OF COMPANY": "Jindal Steel & Power Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-DEC-1999",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE749A01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JINDRILL",
      "NAME OF COMPANY": "Jindal Drilling And Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-DEC-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE742C01031",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "JINDWORLD",
      "NAME OF COMPANY": "Jindal Worldwide Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-NOV-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE247D01039",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JIOFIN",
      "NAME OF COMPANY": "Jio Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE758E01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JISLDVREQS",
      "NAME OF COMPANY": "Jain Irrigation Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-NOV-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "IN9175A01010",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JISLJALEQS",
      "NAME OF COMPANY": "Jain Irrigation Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-AUG-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE175A01038",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JITFINFRA",
      "NAME OF COMPANY": "JITF Infralogistics Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-FEB-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE863T01013",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JKCEMENT",
      "NAME OF COMPANY": "JK Cement Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE823G01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JKIL",
      "NAME OF COMPANY": "J.Kumar Infraprojects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-FEB-2008",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE576I01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "JKLAKSHMI",
      "NAME OF COMPANY": "JK Lakshmi Cement Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUN-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE786A01032",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "JKPAPER",
      "NAME OF COMPANY": "JK Paper Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE789E01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JKTYRE",
      "NAME OF COMPANY": "JK Tyre & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAR-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE573A01042",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JLHL",
      "NAME OF COMPANY": "Jupiter Life Line Hospitals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE682M01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JMA",
      "NAME OF COMPANY": "Jullundur Motor Agency (Delhi) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-MAR-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE412C01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JMFINANCIL",
      "NAME OF COMPANY": "JM Financial Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-OCT-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE780C01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JOCIL",
      "NAME OF COMPANY": "Jocil Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-OCT-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE839G01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JPASSOCIAT",
      "NAME OF COMPANY": "Jaiprakash Associates Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE455F01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JPOLYINVST",
      "NAME OF COMPANY": "Jindal Poly Investment and Finance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-NOV-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE147P01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JPPOWER",
      "NAME OF COMPANY": "Jaiprakash Power Ventures Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-APR-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE351F01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JSFB",
      "NAME OF COMPANY": "Jana Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE953L01027",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JSL",
      "NAME OF COMPANY": "Jindal Stainless Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-NOV-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE220G01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JSWENERGY",
      "NAME OF COMPANY": "JSW Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JAN-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE121E01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JSWHL",
      "NAME OF COMPANY": "JSW Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JUN-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE824G01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JSWINFRA",
      "NAME OF COMPANY": "JSW Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-OCT-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE880J01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JSWSTEEL",
      "NAME OF COMPANY": "JSW Steel Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE019A01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JTEKTINDIA",
      "NAME OF COMPANY": "Jtekt India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JAN-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE643A01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JTLIND",
      "NAME OF COMPANY": "JTL INDUSTRIES LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JUN-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE391J01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JUBLFOOD",
      "NAME OF COMPANY": "Jubilant Foodworks Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE797F01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JUBLINDS",
      "NAME OF COMPANY": "Jubilant Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE645L01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JUBLINGREA",
      "NAME OF COMPANY": "Jubilant Ingrevia Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAR-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0BY001018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JUBLPHARMA",
      "NAME OF COMPANY": "Jubilant Pharmova Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE700A01033",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JUSTDIAL",
      "NAME OF COMPANY": "Just Dial Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUN-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE599M01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JWL",
      "NAME OF COMPANY": "Jupiter Wagons Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE209L01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "JYOTHYLAB",
      "NAME OF COMPANY": "Jyothy Labs Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-DEC-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE668F01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "JYOTICNC",
      "NAME OF COMPANY": "Jyoti CNC Automation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JAN-2024",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE980O01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "JYOTISTRUC",
      "NAME OF COMPANY": "Jyoti Structures Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-JUL-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE197A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KABRAEXTRU",
      "NAME OF COMPANY": "Kabra Extrusion Technik Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE900B01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "KAJARIACER",
      "NAME OF COMPANY": "Kajaria Ceramics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JUN-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE217B01036",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KAKATCEM",
      "NAME OF COMPANY": "Kakatiya Cement Sugar & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-DEC-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE437B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KALAMANDIR",
      "NAME OF COMPANY": "Sai Silks (Kalamandir) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-SEP-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE438K01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KALYANI",
      "NAME OF COMPANY": "Kalyani Commercials Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-FEB-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE610E01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KALYANIFRG",
      "NAME OF COMPANY": "Kalyani Forge Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-DEC-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE314G01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KALYANKJIL",
      "NAME OF COMPANY": "Kalyan Jewellers India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE303R01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KAMATHOTEL",
      "NAME OF COMPANY": "Kamat Hotels (I) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAY-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE967C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KAMDHENU",
      "NAME OF COMPANY": "Kamdhenu Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE390H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KAMOPAINTS",
      "NAME OF COMPANY": "Kamdhenu Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JAN-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0BTI01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "KANANIIND",
      "NAME OF COMPANY": "Kanani Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-DEC-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE879E01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KANORICHEM",
      "NAME OF COMPANY": "Kanoria Chemicals & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE138C01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "KANPRPLA",
      "NAME OF COMPANY": "Kanpur Plastipack Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JAN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE694E01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KANSAINER",
      "NAME OF COMPANY": "Kansai Nerolac Paints Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-SEP-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE531A01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KAPSTON",
      "NAME OF COMPANY": "Kapston Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-MAY-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE542Z01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KARMAENG",
      "NAME OF COMPANY": "Karma Energy Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-JUN-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE725L01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KARURVYSYA",
      "NAME OF COMPANY": "Karur Vysya Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-JUL-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE036D01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KAUSHALYA",
      "NAME OF COMPANY": "Kaushalya Infrastructure Development Corporation Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-DEC-2007",
      "PAID UP VALUE": 1000,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE234I01028",
      "FACE VALUE": 1000
    },
    {
      "SYMBOL": "KAVVERITEL",
      "NAME OF COMPANY": "Kavveri Telecom Products Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE641C01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KAYA",
      "NAME OF COMPANY": "Kaya Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE587G01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KAYNES",
      "NAME OF COMPANY": "Kaynes Technology India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE918Z01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KBCGLOBAL",
      "NAME OF COMPANY": "KBC Global Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-APR-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE278R01034",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KCP",
      "NAME OF COMPANY": "KCP Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-APR-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE805C01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KCPSUGIND",
      "NAME OF COMPANY": "KCP Sugar and Industries Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JUN-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE790B01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KDDL",
      "NAME OF COMPANY": "KDDL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE291D01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KEC",
      "NAME OF COMPANY": "KEC International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAR-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE389H01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KECL",
      "NAME OF COMPANY": "Kirloskar Electric Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE134B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KEEPLEARN",
      "NAME OF COMPANY": "DSJ Keep Learning Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-MAR-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE055C01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KEI",
      "NAME OF COMPANY": "KEI Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE878B01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KELLTONTEC",
      "NAME OF COMPANY": "Kellton Tech Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-MAR-2016",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE164B01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "KERNEX",
      "NAME OF COMPANY": "Kernex Microsystems (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-DEC-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE202H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KESORAMIND",
      "NAME OF COMPANY": "Kesoram Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE087A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KEYFINSERV",
      "NAME OF COMPANY": "Keynote Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-JUN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE681C01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KFINTECH",
      "NAME OF COMPANY": "Kfin Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-DEC-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE138Y01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KHADIM",
      "NAME OF COMPANY": "Khadim India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-NOV-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE834I01025",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KHAICHEM",
      "NAME OF COMPANY": "Khaitan Chemicals & Fertilizers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-OCT-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE745B01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KHAITANLTD",
      "NAME OF COMPANY": "Khaitan (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE731C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KHANDSE",
      "NAME OF COMPANY": "Khandwala Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-FEB-2001",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE060B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KICL",
      "NAME OF COMPANY": "Kalyani Investment Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JAN-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE029L01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KILITCH",
      "NAME OF COMPANY": "Kilitch Drugs (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE729D01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KIMS",
      "NAME OF COMPANY": "Krishna Institute of Medical Sciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE967H01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KINGFA",
      "NAME OF COMPANY": "Kingfa Science & Technology (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-NOV-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE473D01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KIOCL",
      "NAME OF COMPANY": "KIOCL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-NOV-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE880L01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KIRIINDUS",
      "NAME OF COMPANY": "Kiri Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-APR-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE415I01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KIRLOSBROS",
      "NAME OF COMPANY": "Kirloskar Brothers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-APR-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE732A01036",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KIRLOSENG",
      "NAME OF COMPANY": "Kirloskar Oil Engines Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-DEC-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE146L01010",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KIRLOSIND",
      "NAME OF COMPANY": "Kirloskar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE250A01039",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KIRLPNU",
      "NAME OF COMPANY": "Kirloskar Pneumatic Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-APR-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE811A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KITEX",
      "NAME OF COMPANY": "Kitex Garments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-SEP-2012",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE602G01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KKCL",
      "NAME OF COMPANY": "Kewal Kiran Clothing Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-APR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE401H01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KMSUGAR",
      "NAME OF COMPANY": "K.M.Sugar Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-MAY-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE157H01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KNRCON",
      "NAME OF COMPANY": "KNR Constructions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-FEB-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE634I01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KOHINOOR",
      "NAME OF COMPANY": "Kohinoor Foods Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-OCT-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE080B01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KOKUYOCMLN",
      "NAME OF COMPANY": "Kokuyo Camlin Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE760A01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KOLTEPATIL",
      "NAME OF COMPANY": "Kolte - Patil Developers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-DEC-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE094I01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KOPRAN",
      "NAME OF COMPANY": "Kopran Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-JUN-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE082A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KOTAKBANK",
      "NAME OF COMPANY": "Kotak Mahindra Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE237A01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "KOTARISUG",
      "NAME OF COMPANY": "Kothari Sugars And Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-DEC-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE419A01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KOTHARIPET",
      "NAME OF COMPANY": "Kothari Petrochemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE720A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KOTHARIPRO",
      "NAME OF COMPANY": "Kothari Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JUN-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE823A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KPIGREEN",
      "NAME OF COMPANY": "KPI Green Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUL-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE542W01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KPIL",
      "NAME OF COMPANY": "Kalpataru Projects International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE220B01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KPITTECH",
      "NAME OF COMPANY": "KPIT Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-APR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE04I401011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KPRMILL",
      "NAME OF COMPANY": "K.P.R. Mill Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-AUG-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE930H01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KRBL",
      "NAME OF COMPANY": "KRBL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-2002",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE001B01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KREBSBIO",
      "NAME OF COMPANY": "Krebs Biochemicals and Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JAN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE268B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KRIDHANINF",
      "NAME OF COMPANY": "Kridhan Infra Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-DEC-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE524L01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KRISHANA",
      "NAME OF COMPANY": "Krishana Phoschem Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-AUG-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE506W01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KRITI",
      "NAME OF COMPANY": "Kriti Industries (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE479D01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KRITIKA",
      "NAME OF COMPANY": "Kritika Wires Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-MAY-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00Z501029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KRITINUT",
      "NAME OF COMPANY": "Kriti Nutrients Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-OCT-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE798K01010",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "KRSNAA",
      "NAME OF COMPANY": "Krsnaa Diagnostics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-AUG-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE08LI01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "KSB",
      "NAME OF COMPANY": "Ksb Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE999A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KSCL",
      "NAME OF COMPANY": "Kaveri Seed Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-OCT-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE455I01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KSHITIJPOL",
      "NAME OF COMPANY": "Kshitij Polyline Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-JUL-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE013801027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "KSL",
      "NAME OF COMPANY": "Kalyani Steels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAY-2010",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE907A01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "KSOLVES",
      "NAME OF COMPANY": "Ksolves India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-SEP-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0D6I01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KTKBANK",
      "NAME OF COMPANY": "The Karnataka Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE614B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "KUANTUM",
      "NAME OF COMPANY": "Kuantum Papers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-OCT-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE529I01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "L&TFH",
      "NAME OF COMPANY": "L&T Finance Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-AUG-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE498L01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LAGNAM",
      "NAME OF COMPANY": "Lagnam Spintex Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-SEP-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE548Z01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LAL",
      "NAME OF COMPANY": "Lorenzini Apparels Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-APR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE740X01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LALPATHLAB",
      "NAME OF COMPANY": "Dr. Lal Path Labs Ltd.",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-DEC-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE600L01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LAMBODHARA",
      "NAME OF COMPANY": "Lambodhara Textiles Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-FEB-2015",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE112F01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "LANDMARK",
      "NAME OF COMPANY": "Landmark Cars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-DEC-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE559R01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "LAOPALA",
      "NAME OF COMPANY": "La Opala RG Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-MAR-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE059D01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LASA",
      "NAME OF COMPANY": "Lasa Supergenerics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-SEP-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE670X01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LATENTVIEW",
      "NAME OF COMPANY": "Latent View Analytics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-NOV-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0I7C01011",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "LATTEYS",
      "NAME OF COMPANY": "Latteys Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-MAY-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE262Z01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LAURUSLABS",
      "NAME OF COMPANY": "Laurus Labs Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-DEC-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE947Q01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LAXMICOT",
      "NAME OF COMPANY": "Laxmi Cotspin Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE801V01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LAXMIMACH",
      "NAME OF COMPANY": "Lakshmi Machine Works Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE269B01029",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LCCINFOTEC",
      "NAME OF COMPANY": "LCC Infotech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-MAR-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE938A01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LEMONTREE",
      "NAME OF COMPANY": "Lemon Tree Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-APR-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE970X01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LEXUS",
      "NAME OF COMPANY": "Lexus Granito (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-MAR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE500X01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LFIC",
      "NAME OF COMPANY": "Lakshmi Finance & Industrial Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-APR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE850E01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LGBBROSLTD",
      "NAME OF COMPANY": "LG Balakrishnan & Bros Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE337A01034",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LGBFORGE",
      "NAME OF COMPANY": "LGB Forge Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-AUG-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE201J01017",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "LGHL",
      "NAME OF COMPANY": "Laxmi Goldorna House Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-NOV-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE258Y01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LIBAS",
      "NAME OF COMPANY": "Libas Consumer Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE908V01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LIBERTSHOE",
      "NAME OF COMPANY": "Liberty Shoes Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE557B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LICHSGFIN",
      "NAME OF COMPANY": "LIC Housing Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUL-1998",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE115A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LICI",
      "NAME OF COMPANY": "Life Insurance Corporation Of India",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0J1Y01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LIKHITHA",
      "NAME OF COMPANY": "Likhitha Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-OCT-2020",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE060901027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "LINC",
      "NAME OF COMPANY": "Linc Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE802B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LINCOLN",
      "NAME OF COMPANY": "Lincoln Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-DEC-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE405C01035",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LINDEINDIA",
      "NAME OF COMPANY": "Linde India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE473A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LLOYDSENGG",
      "NAME OF COMPANY": "LLOYDS ENGINEERING WORKS LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUL-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE093R01011",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "LLOYDSME",
      "NAME OF COMPANY": "Lloyds Metals And Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUL-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE281B01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "LODHA",
      "NAME OF COMPANY": "Macrotech Developers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-APR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE670K01029",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LOKESHMACH",
      "NAME OF COMPANY": "Lokesh Machines Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAY-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE397H01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LORDSCHLO",
      "NAME OF COMPANY": "Lords Chloro Alkali Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE846D01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LOTUSEYE",
      "NAME OF COMPANY": "Lotus Eye Hospital and Institute Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JUL-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE947I01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LOVABLE",
      "NAME OF COMPANY": "Lovable Lingerie Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAR-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE597L01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LOYALTEX",
      "NAME OF COMPANY": "Loyal Textile Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE970D01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LPDC",
      "NAME OF COMPANY": "Landmark Property Development Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-AUG-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE197J01017",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "LT",
      "NAME OF COMPANY": "Larsen & Toubro Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUN-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE018A01030",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LTFOODS",
      "NAME OF COMPANY": "LT Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-DEC-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE818H01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "LTIM",
      "NAME OF COMPANY": "LTIMindtree Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JUL-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE214T01019",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "LTTS",
      "NAME OF COMPANY": "L&T Technology Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-SEP-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE010V01017",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LUMAXIND",
      "NAME OF COMPANY": "Lumax Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE162B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LUMAXTECH",
      "NAME OF COMPANY": "Lumax Auto Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JAN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE872H01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LUPIN",
      "NAME OF COMPANY": "Lupin Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-SEP-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE326A01037",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LUXIND",
      "NAME OF COMPANY": "Lux Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-NOV-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE150G01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LXCHEM",
      "NAME OF COMPANY": "Laxmi Organic Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAR-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE576O01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "LYKALABS",
      "NAME OF COMPANY": "Lyka Labs Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE933A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "LYPSAGEMS",
      "NAME OF COMPANY": "Lypsa Gems & Jewellery Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE142K01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "M&M",
      "NAME OF COMPANY": "Mahindra & Mahindra Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JAN-1996",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE101A01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "M&MFIN",
      "NAME OF COMPANY": "Mahindra & Mahindra Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAR-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE774D01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MAANALU",
      "NAME OF COMPANY": "Maan Aluminium Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-OCT-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE215I01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MACPOWER",
      "NAME OF COMPANY": "Macpower CNC Machines Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-AUG-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE155Z01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MADHAV",
      "NAME OF COMPANY": "Madhav Marbles and Granites Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-DEC-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE925C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MADHUCON",
      "NAME OF COMPANY": "Madhucon Projects Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "05-OCT-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE378D01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MADRASFERT",
      "NAME OF COMPANY": "Madras Fertilizers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-JUL-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE414A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAGADSUGAR",
      "NAME OF COMPANY": "Magadh Sugar & Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE347W01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAGNUM",
      "NAME OF COMPANY": "Magnum Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE387I01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAGNUM-RE",
      "NAME OF COMPANY": "Magnum Ventures Ltd-RE",
      "SERIES": "BE",
      "DATE OF LISTING": "07-FEB-2024",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE387I20016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHABANK",
      "NAME OF COMPANY": "Bank of Maharashtra",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE457A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHAPEXLTD",
      "NAME OF COMPANY": "Maha Rashtra Apex Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE843B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHASTEEL",
      "NAME OF COMPANY": "Mahamaya Steel Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-JUL-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE451L01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHEPC",
      "NAME OF COMPANY": "Mahindra EPC Irrigation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE215D01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHESHWARI",
      "NAME OF COMPANY": "Maheshwari Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-APR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE263W01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHLIFE",
      "NAME OF COMPANY": "Mahindra Lifespace Developers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE813A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHLOG",
      "NAME OF COMPANY": "Mahindra Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-NOV-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE766P01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHSCOOTER",
      "NAME OF COMPANY": "Maharashtra Scooters Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE288A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAHSEAMLES",
      "NAME OF COMPANY": "Maharashtra Seamless Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-AUG-2004",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE271B01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MAITHANALL",
      "NAME OF COMPANY": "Maithan Alloys Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUL-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE683C01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MALLCOM",
      "NAME OF COMPANY": "Mallcom (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-FEB-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE389C01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MALUPAPER",
      "NAME OF COMPANY": "Malu Paper Mills Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "05-APR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE383H01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MANAKALUCO",
      "NAME OF COMPANY": "Manaksia Aluminium Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-MAR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE859Q01017",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MANAKCOAT",
      "NAME OF COMPANY": "Manaksia Coated Metals & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE830Q01018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MANAKSIA",
      "NAME OF COMPANY": "Manaksia Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JAN-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE015D01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MANAKSTEEL",
      "NAME OF COMPANY": "Manaksia Steels Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-MAR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE824Q01011",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MANALIPETC",
      "NAME OF COMPANY": "Manali Petrochemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-DEC-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE201A01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MANAPPURAM",
      "NAME OF COMPANY": "Manappuram Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-DEC-2014",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE522D01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MANGALAM",
      "NAME OF COMPANY": "Mangalam Drugs And Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAY-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE584F01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MANGCHEFER",
      "NAME OF COMPANY": "Mangalore Chemicals & Fertilizers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-OCT-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE558B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MANGLMCEM",
      "NAME OF COMPANY": "Mangalam Cement Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JAN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE347A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MANINDS",
      "NAME OF COMPANY": "Man Industries (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "24-JUN-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE993A01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MANINFRA",
      "NAME OF COMPANY": "Man Infraconstruction Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-MAR-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE949H01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MANKIND",
      "NAME OF COMPANY": "Mankind Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE634S01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MANOMAY",
      "NAME OF COMPANY": "Manomay Tex India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-JAN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE784W01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MANORAMA",
      "NAME OF COMPANY": "Manorama Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JUL-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00VM01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MANORG",
      "NAME OF COMPANY": "Mangalam Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE370D01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MANUGRAPH",
      "NAME OF COMPANY": "Manugraph India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-SEP-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE867A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MANYAVAR",
      "NAME OF COMPANY": "Vedant Fashions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE825V01034",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MAPMYINDIA",
      "NAME OF COMPANY": "C.E. Info Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-DEC-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0BV301023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MARALOVER",
      "NAME OF COMPANY": "Maral Overseas Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE882A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MARATHON",
      "NAME OF COMPANY": "Marathon Nextgen Realty Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2016",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE182D01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MARICO",
      "NAME OF COMPANY": "Marico Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAY-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE196A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MARINE",
      "NAME OF COMPANY": "Marine Electricals (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-DEC-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01JE01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MARKSANS",
      "NAME OF COMPANY": "Marksans Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-2002",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE750C01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MARSHALL",
      "NAME OF COMPANY": "Marshall Machines Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00SZ01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MARUTI",
      "NAME OF COMPANY": "Maruti Suzuki India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-JUL-2003",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE585B01010",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MASFIN",
      "NAME OF COMPANY": "MAS Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE348L01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MASTEK",
      "NAME OF COMPANY": "Mastek Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE759A01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MATRIMONY",
      "NAME OF COMPANY": "Matrimony.Com Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-SEP-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE866R01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MAWANASUG",
      "NAME OF COMPANY": "Mawana Sugars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-MAR-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE636A01039",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAXESTATES",
      "NAME OF COMPANY": "Max Estates Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03EI01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAXHEALTH",
      "NAME OF COMPANY": "Max Healthcare Institute Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-AUG-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE027H01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAXIND",
      "NAME OF COMPANY": "Max India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-AUG-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0CG601016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAYURUNIQ",
      "NAME OF COMPANY": "Mayur Uniquoters Ltd",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-SEP-2012",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE040D01038",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MAZDA",
      "NAME OF COMPANY": "Mazda Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE885E01034",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MAZDOCK",
      "NAME OF COMPANY": "Mazagon Dock Shipbuilders Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE249Z01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MBAPL",
      "NAME OF COMPANY": "Madhya Bharat Agro Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-AUG-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE900L01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MBECL",
      "NAME OF COMPANY": "Mcnally Bharat Engineering Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-OCT-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE748A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MBLINFRA",
      "NAME OF COMPANY": "MBL Infrastructure Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-JAN-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE912H01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MCDOWELL-N",
      "NAME OF COMPANY": "United Spirits Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-SEP-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE854D01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MCL",
      "NAME OF COMPANY": "Madhav Copper Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-AUG-2020",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE813V01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MCLEODRUSS",
      "NAME OF COMPANY": "Mcleod Russel India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUL-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE942G01012",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MCX",
      "NAME OF COMPANY": "Multi Commodity Exchange of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE745G01035",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MEDANTA",
      "NAME OF COMPANY": "Global Health Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-NOV-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE474Q01031",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MEDIASSIST",
      "NAME OF COMPANY": "Medi Assist Healthcare Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JAN-2024",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE456Z01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MEDICAMEQ",
      "NAME OF COMPANY": "Medicamen Biotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE646B01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MEDICO",
      "NAME OF COMPANY": "Medico Remedies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAY-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE630Y01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MEDPLUS",
      "NAME OF COMPANY": "Medplus Health Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-DEC-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE804L01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MEGASOFT",
      "NAME OF COMPANY": "Megasoft Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-JUL-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE933B01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MEGASTAR",
      "NAME OF COMPANY": "Megastar Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-FEB-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00EM01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MELSTAR",
      "NAME OF COMPANY": "Melstar Information Technologies Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "07-MAR-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE817A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MENONBE",
      "NAME OF COMPANY": "Menon Bearings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE071D01033",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MEP",
      "NAME OF COMPANY": "MEP Infrastructure Developers Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-MAY-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE776I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "METROBRAND",
      "NAME OF COMPANY": "Metro Brands Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-DEC-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE317I01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "METROPOLIS",
      "NAME OF COMPANY": "Metropolis Healthcare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-APR-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE112L01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MFSL",
      "NAME OF COMPANY": "Max Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE180A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MGEL",
      "NAME OF COMPANY": "Mangalam Global Enterprise Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-DEC-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0APB01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MGL",
      "NAME OF COMPANY": "Mahanagar Gas Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JUL-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE002S01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MHLXMIRU",
      "NAME OF COMPANY": "Mahalaxmi Rubtech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-JAN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE112D01035",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MHRIL",
      "NAME OF COMPANY": "Mahindra Holidays & Resorts India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUL-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE998I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MICEL",
      "NAME OF COMPANY": "MIC Electronics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-DEC-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE287C01037",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MIDHANI",
      "NAME OF COMPANY": "Mishra Dhatu Nigam Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-APR-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE099Z01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MINDACORP",
      "NAME OF COMPANY": "Minda Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-OCT-2014",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE842C01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MINDTECK",
      "NAME OF COMPANY": "Mindteck (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-AUG-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE110B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MIRCELECTR",
      "NAME OF COMPANY": "MIRC Electronics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAY-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE831A01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MIRZAINT",
      "NAME OF COMPANY": "Mirza International Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-APR-1999",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE771A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MITCON",
      "NAME OF COMPANY": "MITCON Consultancy & Engineering Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-MAR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE828O01033",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MITTAL",
      "NAME OF COMPANY": "Mittal Life Style Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-APR-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE997Y01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MKPL",
      "NAME OF COMPANY": "M K Proteins Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-JUN-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE964W01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MMFL",
      "NAME OF COMPANY": "MM Forgings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE227C01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MMP",
      "NAME OF COMPANY": "MMP Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-JAN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE511Y01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MMTC",
      "NAME OF COMPANY": "MMTC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-APR-2012",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE123F01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MODIRUBBER",
      "NAME OF COMPANY": "Modi Rubber Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-FEB-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE832A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MODISONLTD",
      "NAME OF COMPANY": "MODISON LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAY-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE737D01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MODTHREAD",
      "NAME OF COMPANY": "Modern Threads (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-NOV-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 50,
      "ISIN NUMBER": "INE794W01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MOHITIND",
      "NAME OF COMPANY": "Mohit Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAR-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE954E01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MOIL",
      "NAME OF COMPANY": "MOIL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE490G01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MOKSH",
      "NAME OF COMPANY": "Moksh Ornaments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-MAY-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE514Y01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MOL",
      "NAME OF COMPANY": "Meghmani Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-AUG-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0CT101020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MOLDTECH",
      "NAME OF COMPANY": "Mold-Tek Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUL-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE835B01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MOLDTKPAC",
      "NAME OF COMPANY": "Mold-Tek Packaging Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-FEB-2015",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE893J01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MONARCH",
      "NAME OF COMPANY": "Monarch Networth Capital Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JAN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE903D01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MONTECARLO",
      "NAME OF COMPANY": "Monte Carlo Fashions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-DEC-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE950M01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MORARJEE",
      "NAME OF COMPANY": "Morarjee Textiles Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-SEP-2012",
      "PAID UP VALUE": 7,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE161G01027",
      "FACE VALUE": 7
    },
    {
      "SYMBOL": "MOREPENLAB",
      "NAME OF COMPANY": "Morepen Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-NOV-1999",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE083A01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MOTHERSON",
      "NAME OF COMPANY": "Samvardhana Motherson International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-AUG-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE775A01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MOTILALOFS",
      "NAME OF COMPANY": "Motilal Oswal Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-SEP-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE338I01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MOTISONS",
      "NAME OF COMPANY": "Motisons Jewellers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0FRK01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MOTOGENFIN",
      "NAME OF COMPANY": "The Motor & General Finance Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE861B01023",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MPHASIS",
      "NAME OF COMPANY": "MphasiS Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUN-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE356A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MPSLTD",
      "NAME OF COMPANY": "MPS Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE943D01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MRF",
      "NAME OF COMPANY": "MRF Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-SEP-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE883A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MRO-TEK",
      "NAME OF COMPANY": "MRO-TEK Realty Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE398B01018",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MRPL",
      "NAME OF COMPANY": "Mangalore Refinery and Petrochemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JAN-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE103A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MSPL",
      "NAME OF COMPANY": "MSP Steel & Power Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-JUL-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE752G01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MSTCLTD",
      "NAME OF COMPANY": "Mstc Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE255X01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MSUMI",
      "NAME OF COMPANY": "Motherson Sumi Wiring India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-MAR-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0FS801015",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MTARTECH",
      "NAME OF COMPANY": "Mtar Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE864I01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MTEDUCARE",
      "NAME OF COMPANY": "MT Educare Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-APR-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE472M01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MTNL",
      "NAME OF COMPANY": "Mahanagar Telephone Nigam Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-FEB-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE153A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MUFIN",
      "NAME OF COMPANY": "Mufin Green Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE08KJ01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "MUFTI",
      "NAME OF COMPANY": "Credo Brands Marketing Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE220Q01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MUKANDLTD",
      "NAME OF COMPANY": "Mukand Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-FEB-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE304A01026",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MUKTAARTS",
      "NAME OF COMPANY": "Mukta Arts Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-SEP-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE374B01019",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "MUNJALAU",
      "NAME OF COMPANY": "Munjal Auto Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE672B01032",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MUNJALSHOW",
      "NAME OF COMPANY": "Munjal Showa Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAY-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE577A01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "MURUDCERA",
      "NAME OF COMPANY": "Murudeshwar Ceramics Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-MAY-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE692B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MUTHOOTCAP",
      "NAME OF COMPANY": "Muthoot Capital Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE296G01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MUTHOOTFIN",
      "NAME OF COMPANY": "Muthoot Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-MAY-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE414G01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MUTHOOTMF",
      "NAME OF COMPANY": "Muthoot Microfin Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE046W01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "MVGJL",
      "NAME OF COMPANY": "Manoj Vaibhav Gems N Jewellers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0KNT01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NACLIND",
      "NAME OF COMPANY": "NACL Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE295D01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NAGAFERT",
      "NAME OF COMPANY": "Nagarjuna Fertilizers and Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUN-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE454M01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NAGREE-RE",
      "NAME OF COMPANY": "Nagreeka Exports Ltd-RE",
      "SERIES": "BE",
      "DATE OF LISTING": "12-FEB-2024",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE123B20010",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NAGREEKCAP",
      "NAME OF COMPANY": "Nagreeka Capital & Infrastructure Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-SEP-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE245I01016",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NAGREEKEXP",
      "NAME OF COMPANY": "Nagreeka Exports Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-JUN-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE123B01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NAHARCAP",
      "NAME OF COMPANY": "Nahar Capital and Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-MAR-2008",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE049I01012",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NAHARINDUS",
      "NAME OF COMPANY": "Nahar Industrial Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE289A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NAHARPOLY",
      "NAME OF COMPANY": "Nahar Poly Films Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE308A01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NAHARSPING",
      "NAME OF COMPANY": "Nahar Spinning Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE290A01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NAM-INDIA",
      "NAME OF COMPANY": "Nippon Life India Asset Management Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE298J01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NARMADA",
      "NAME OF COMPANY": "Narmada Agrobase Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-OCT-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE117Z01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NATCOPHARM",
      "NAME OF COMPANY": "Natco Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE987B01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NATHBIOGEN",
      "NAME OF COMPANY": "Nath Bio-Genes (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE448G01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NATIONALUM",
      "NAME OF COMPANY": "National Aluminium Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-APR-1999",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE139A01034",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NAUKRI",
      "NAME OF COMPANY": "Info Edge (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE663F01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NAVA",
      "NAME OF COMPANY": "NAVA LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE725A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NAVINFLUOR",
      "NAME OF COMPANY": "Navin Fluorine International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JUN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE048G01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NAVKARCORP",
      "NAME OF COMPANY": "Navkar Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-SEP-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE278M01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NAVNETEDUL",
      "NAME OF COMPANY": "Navneet Education Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE060A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NAZARA",
      "NAME OF COMPANY": "Nazara Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2021",
      "PAID UP VALUE": 4,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE418L01021",
      "FACE VALUE": 4
    },
    {
      "SYMBOL": "NBCC",
      "NAME OF COMPANY": "NBCC (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-2012",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE095N01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NBIFIN",
      "NAME OF COMPANY": "N. B. I. Industrial Finance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-NOV-2016",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE365I01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NCC",
      "NAME OF COMPANY": "NCC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-OCT-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE868B01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NCLIND",
      "NAME OF COMPANY": "NCL Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE732C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NDGL",
      "NAME OF COMPANY": "Naga Dhunseri Group Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-AUG-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE756C01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NDL",
      "NAME OF COMPANY": "Nandan Denim Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE875G01030",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NDLVENTURE",
      "NAME OF COMPANY": "NDL Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-APR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE353A01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NDRAUTO",
      "NAME OF COMPANY": "Ndr Auto Components Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-JUL-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07OG01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NDTV",
      "NAME OF COMPANY": "New Delhi Television Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAY-2004",
      "PAID UP VALUE": 4,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE155G01029",
      "FACE VALUE": 4
    },
    {
      "SYMBOL": "NECCLTD",
      "NAME OF COMPANY": "North Eastern Carrying Corporation Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-MAR-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE553C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NECLIFE",
      "NAME OF COMPANY": "Nectar Lifesciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUL-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE023H01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NELCAST",
      "NAME OF COMPANY": "Nelcast Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE189I01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NELCO",
      "NAME OF COMPANY": "NELCO Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-MAY-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE045B01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NEOGEN",
      "NAME OF COMPANY": "Neogen Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAY-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE136S01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NESCO",
      "NAME OF COMPANY": "Nesco Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-APR-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE317F01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NESTLEIND",
      "NAME OF COMPANY": "Nestle India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-AUG-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE239A01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NETWEB",
      "NAME OF COMPANY": "Netweb Technologies India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUL-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0NT901020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NETWORK18",
      "NAME OF COMPANY": "Network18 Media & Investments Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-FEB-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE870H01013",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NEULANDLAB",
      "NAME OF COMPANY": "Neuland Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-OCT-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE794A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NEWGEN",
      "NAME OF COMPANY": "Newgen Software Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JAN-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE619B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NEXTMEDIA",
      "NAME OF COMPANY": "Next Mediaworks Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-APR-2001",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE747B01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NFL",
      "NAME OF COMPANY": "National Fertilizers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-DEC-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE870D01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NGIL",
      "NAME OF COMPANY": "Nakoda Group of Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE236Y01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NGLFINE",
      "NAME OF COMPANY": "NGL Fine-Chem Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JUL-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE887E01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NH",
      "NAME OF COMPANY": "Narayana Hrudayalaya Ltd.",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JAN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE410P01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NHPC",
      "NAME OF COMPANY": "NHPC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-SEP-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE848E01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NIACL",
      "NAME OF COMPANY": "The New India Assurance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-NOV-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE470Y01017",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NIBL",
      "NAME OF COMPANY": "NRB Industrial Bearings Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "09-APR-2013",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE047O01014",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NIITLTD",
      "NAME OF COMPANY": "NIIT Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-AUG-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE161A01038",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NIITMTS",
      "NAME OF COMPANY": "NIIT Learning Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-AUG-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE342G01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NILAINFRA",
      "NAME OF COMPANY": "Nila Infrastructures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-MAY-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE937C01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NILASPACES",
      "NAME OF COMPANY": "Nila Spaces Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-DEC-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00S901012",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NILKAMAL",
      "NAME OF COMPANY": "Nilkamal Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-NOV-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE310A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NINSYS",
      "NAME OF COMPANY": "NINtec Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-FEB-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE395U01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NIPPOBATRY",
      "NAME OF COMPANY": "Indo-National Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-OCT-1999",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE567A01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "NIRAJ",
      "NAME OF COMPANY": "Niraj Cement Structurals Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE368I01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NIRAJISPAT",
      "NAME OF COMPANY": "Niraj Ispat Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-OCT-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE326T01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NITCO",
      "NAME OF COMPANY": "Nitco Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "21-MAR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE858F01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NITINSPIN",
      "NAME OF COMPANY": "Nitin Spinners Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-FEB-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE229H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NITIRAJ",
      "NAME OF COMPANY": "Nitiraj Engineers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-APR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE439T01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NKIND",
      "NAME OF COMPANY": "NK Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-JUL-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE542C01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NLCINDIA",
      "NAME OF COMPANY": "NLC India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE589A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NMDC",
      "NAME OF COMPANY": "NMDC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAR-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE584A01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "NOCIL",
      "NAME OF COMPANY": "NOCIL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JAN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE163A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NOIDATOLL",
      "NAME OF COMPANY": "Noida Toll Bridge Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-DEC-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE781B01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NORBTEAEXP",
      "NAME OF COMPANY": "Norben Tea & Exports Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "26-JUN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE369C01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NOVAAGRI",
      "NAME OF COMPANY": "Nova Agritech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-JAN-2024",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02H701025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NRAIL",
      "NAME OF COMPANY": "N R Agarwal Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-APR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE740D01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NRBBEARING",
      "NAME OF COMPANY": "NRB Bearing Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAR-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE349A01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "NRL",
      "NAME OF COMPANY": "Nupur Recyclers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JAN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JM501013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NSIL",
      "NAME OF COMPANY": "Nalwa Sons Investments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-NOV-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE023A01030",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NSLNISP",
      "NAME OF COMPANY": "NMDC Steel Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-FEB-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0NNS01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NTPC",
      "NAME OF COMPANY": "NTPC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE733E01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NUCLEUS",
      "NAME OF COMPANY": "Nucleus Software Exports Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-DEC-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE096B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NURECA",
      "NAME OF COMPANY": "Nureca Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-FEB-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0DSF01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NUVAMA",
      "NAME OF COMPANY": "Nuvama Wealth Management Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE531F01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NUVOCO",
      "NAME OF COMPANY": "Nuvoco Vistas Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE118D01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "NYKAA",
      "NAME OF COMPANY": "FSN E-Commerce Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-NOV-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE388Y01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "OAL",
      "NAME OF COMPANY": "Oriental Aromatics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JUL-2019",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE959C01023",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "OBCL",
      "NAME OF COMPANY": "Orissa Bengal Carrier Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE426Z01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OBEROIRLTY",
      "NAME OF COMPANY": "Oberoi Realty Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE093I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OCCL",
      "NAME OF COMPANY": "Oriental Carbon & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JAN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE321D01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OFSS",
      "NAME OF COMPANY": "Oracle Financial Services Software Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUN-2002",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE881D01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "OIL",
      "NAME OF COMPANY": "Oil India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-SEP-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE274J01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OILCOUNTUB",
      "NAME OF COMPANY": "Oil Country Tubular Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-AUG-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE591A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OLECTRA",
      "NAME OF COMPANY": "Olectra Greentech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-MAR-2002",
      "PAID UP VALUE": 4,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE260D01016",
      "FACE VALUE": 4
    },
    {
      "SYMBOL": "OMAXAUTO",
      "NAME OF COMPANY": "Omax Autos Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-FEB-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE090B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OMAXE",
      "NAME OF COMPANY": "Omaxe Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-AUG-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE800H01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OMINFRAL",
      "NAME OF COMPANY": "OM INFRA LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "17-JUN-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE239D01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "OMKARCHEM",
      "NAME OF COMPANY": "Omkar Speciality Chemicals Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "10-FEB-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE474L01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ONELIFECAP",
      "NAME OF COMPANY": "Onelife Capital Advisors Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-OCT-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE912L01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ONEPOINT",
      "NAME OF COMPANY": "One Point One Solutions Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "09-MAY-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE840Y01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ONGC",
      "NAME OF COMPANY": "Oil & Natural Gas Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE213A01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ONMOBILE",
      "NAME OF COMPANY": "OnMobile Global Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-FEB-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE809I01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ONWARDTEC",
      "NAME OF COMPANY": "Onward Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAR-2001",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE229A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OPTIEMUS",
      "NAME OF COMPANY": "Optiemus Infracom Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-AUG-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE350C01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ORBTEXP",
      "NAME OF COMPANY": "Orbit Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE231G01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ORCHPHARMA",
      "NAME OF COMPANY": "Orchid Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE191A01027",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ORICONENT",
      "NAME OF COMPANY": "Oricon Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUL-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE730A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ORIENTALTL",
      "NAME OF COMPANY": "Oriental Trimex Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-MAR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE998H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ORIENTBELL",
      "NAME OF COMPANY": "Orient Bell Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE607D01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ORIENTCEM",
      "NAME OF COMPANY": "Orient Cement Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JUL-2013",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE876N01018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ORIENTCER",
      "NAME OF COMPANY": "ORIENT CERATECH LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE569C01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ORIENTELEC",
      "NAME OF COMPANY": "Orient Electric Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAY-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE142Z01019",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ORIENTHOT",
      "NAME OF COMPANY": "Oriental Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-AUG-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE750A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ORIENTLTD",
      "NAME OF COMPANY": "Orient Press Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE609C01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ORIENTPPR",
      "NAME OF COMPANY": "Orient Paper & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE592A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ORISSAMINE",
      "NAME OF COMPANY": "The Orissa Minerals Development Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE725E01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ORTINLAB",
      "NAME OF COMPANY": "Ortin Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE749B01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OSIAHYPER",
      "NAME OF COMPANY": "Osia Hyper Retail Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-DEC-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE06IR01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "OSWALAGRO",
      "NAME OF COMPANY": "Oswal Agro Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE142A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OSWALGREEN",
      "NAME OF COMPANY": "Oswal Greentech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-AUG-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE143A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "OSWALSEEDS",
      "NAME OF COMPANY": "ShreeOswal Seeds And Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-FEB-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00IK01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PAGEIND",
      "NAME OF COMPANY": "Page Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-MAR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE761H01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PAISALO",
      "NAME OF COMPANY": "Paisalo Digital Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-OCT-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE420C01059",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PAKKA",
      "NAME OF COMPANY": "PAKKA LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE551D01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PALASHSECU",
      "NAME OF COMPANY": "Palash Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE471W01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PALREDTEC",
      "NAME OF COMPANY": "Palred Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE218G01033",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PANACEABIO",
      "NAME OF COMPANY": "Panacea Biotec Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-APR-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE922B01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PANACHE",
      "NAME OF COMPANY": "Panache Digilife Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JAN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE895W01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PANAMAPET",
      "NAME OF COMPANY": "Panama Petrochem Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-SEP-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE305C01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PANSARI",
      "NAME OF COMPANY": "Pansari Developers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE697V01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PAR",
      "NAME OF COMPANY": "Par Drugs And Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-SEP-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE04LG01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PARACABLES",
      "NAME OF COMPANY": "Paramount Communications Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-JAN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE074B01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PARADEEP",
      "NAME OF COMPANY": "Paradeep Phosphates Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE088F01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PARAGMILK",
      "NAME OF COMPANY": "Parag Milk Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAY-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE883N01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PARAS",
      "NAME OF COMPANY": "Paras Defence and Space Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE045601015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PARASPETRO",
      "NAME OF COMPANY": "Paras Petrofils Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-FEB-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE162C01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PARKHOTELS",
      "NAME OF COMPANY": "Apeejay Surrendra Park Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-FEB-2024",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE988S01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PARSVNATH",
      "NAME OF COMPANY": "Parsvnath Developers Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-NOV-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE561H01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PASUPTAC",
      "NAME OF COMPANY": "Pasupati Acrylon Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE818B01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PATANJALI",
      "NAME OF COMPANY": "Patanjali Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JAN-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE619A01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PATELENG",
      "NAME OF COMPANY": "Patel Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-FEB-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE244B01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PATINTLOG",
      "NAME OF COMPANY": "Patel Integrated Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE529D01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PAVNAIND",
      "NAME OF COMPANY": "Pavna Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-JUN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07S101020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PAYTM",
      "NAME OF COMPANY": "One 97 Communications Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-NOV-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE982J01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PCBL",
      "NAME OF COMPANY": "PCBL LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE602A01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PCJEWELLER",
      "NAME OF COMPANY": "PC Jeweller Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE785M01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PDMJEPAPER",
      "NAME OF COMPANY": "Pudumjee Paper Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE865T01018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PDSL",
      "NAME OF COMPANY": "PDS Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-OCT-2014",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE111Q01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PEARLPOLY",
      "NAME OF COMPANY": "Pearl Polymers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-OCT-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE844A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PEL",
      "NAME OF COMPANY": "Piramal Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE140A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PENIND",
      "NAME OF COMPANY": "Pennar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-NOV-2010",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE932A01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PENINLAND",
      "NAME OF COMPANY": "Peninsula Land Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE138A01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PERSISTENT",
      "NAME OF COMPANY": "Persistent Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-APR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE262H01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PETRONET",
      "NAME OF COMPANY": "Petronet LNG Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAR-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE347G01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PFC",
      "NAME OF COMPANY": "Power Finance Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE134E01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PFIZER",
      "NAME OF COMPANY": "Pfizer Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-APR-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE182A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PFOCUS",
      "NAME OF COMPANY": "Prime Focus Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE367G01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PFS",
      "NAME OF COMPANY": "PTC India Financial Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-MAR-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE560K01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PGEL",
      "NAME OF COMPANY": "PG Electroplast Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-SEP-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE457L01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PGHH",
      "NAME OF COMPANY": "Procter & Gamble Hygiene and Health Care Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUL-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE179A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PGHL",
      "NAME OF COMPANY": "Procter & Gamble Health Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE199A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PGIL",
      "NAME OF COMPANY": "Pearl Global Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "15-FEB-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE940H01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PHOENIXLTD",
      "NAME OF COMPANY": "The Phoenix Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-APR-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE211B01039",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PIDILITIND",
      "NAME OF COMPANY": "Pidilite Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE318A01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PIGL",
      "NAME OF COMPANY": "Power & Instrumentation (Gujarat) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE557Z01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PIIND",
      "NAME OF COMPANY": "PI Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUN-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE603J01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PILANIINVS",
      "NAME OF COMPANY": "Pilani Investment and Industries Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-DEC-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE417C01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PILITA",
      "NAME OF COMPANY": "PIL ITALICA LIFESTYLE LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-OCT-2013",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE600A01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PIONEEREMB",
      "NAME OF COMPANY": "Pioneer Embroideries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-MAY-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE156C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PITTIENG",
      "NAME OF COMPANY": "Pitti Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-FEB-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE450D01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PIXTRANS",
      "NAME OF COMPANY": "Pix Transmissions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE751B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PKTEA",
      "NAME OF COMPANY": "The Peria Karamalai Tea & Produce Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE431F01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PLASTIBLEN",
      "NAME OF COMPANY": "Plastiblends India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-DEC-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE083C01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PLAZACABLE",
      "NAME OF COMPANY": "Plaza Wires Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0INJ01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PNB",
      "NAME OF COMPANY": "Punjab National Bank",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-APR-2002",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE160A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PNBGILTS",
      "NAME OF COMPANY": "PNB Gilts Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-SEP-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE859A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PNBHOUSING",
      "NAME OF COMPANY": "PNB Housing Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-NOV-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE572E01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PNC",
      "NAME OF COMPANY": "Pritish Nandy Communications Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-DEC-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE392B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PNCINFRA",
      "NAME OF COMPANY": "PNC Infratech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAY-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE195J01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "POCL",
      "NAME OF COMPANY": "Pondy Oxides & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-MAR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE063E01046",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PODDARHOUS",
      "NAME OF COMPANY": "Poddar Housing and Development Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "10-APR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE888B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PODDARMENT",
      "NAME OF COMPANY": "Poddar Pigments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-NOV-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE371C01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "POKARNA",
      "NAME OF COMPANY": "Pokarna Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUL-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE637C01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "POLICYBZR",
      "NAME OF COMPANY": "PB Fintech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-NOV-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE417T01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "POLYCAB",
      "NAME OF COMPANY": "Polycab India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-APR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE455K01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "POLYMED",
      "NAME OF COMPANY": "Poly Medicure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-DEC-2011",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE205C01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "POLYPLEX",
      "NAME OF COMPANY": "Polyplex Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-APR-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE633B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PONNIERODE",
      "NAME OF COMPANY": "Ponni Sugars (Erode) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-APR-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE838E01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "POONAWALLA",
      "NAME OF COMPANY": "Poonawalla Fincorp Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-APR-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE511C01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "POWERGRID",
      "NAME OF COMPANY": "Power Grid Corporation of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-OCT-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE752E01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "POWERINDIA",
      "NAME OF COMPANY": "Hitachi Energy India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07Y701011",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "POWERMECH",
      "NAME OF COMPANY": "Power Mech Projects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE211R01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PPAP",
      "NAME OF COMPANY": "PPAP Automotive Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-JAN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE095I01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PPL",
      "NAME OF COMPANY": "Prakash Pipes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUN-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE050001010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PPLPHARMA",
      "NAME OF COMPANY": "Piramal Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-OCT-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0DK501011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRAENG",
      "NAME OF COMPANY": "Prajay Engineers Syndicate Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-JAN-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE505C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRAJIND",
      "NAME OF COMPANY": "Praj Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-OCT-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE074A01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PRAKASH",
      "NAME OF COMPANY": "Prakash Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE603A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRAKASHSTL",
      "NAME OF COMPANY": "Prakash Steelage Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-AUG-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE696K01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PRAXIS",
      "NAME OF COMPANY": "Praxis Home Retail Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "31-JAN-2018",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE546Y01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PRECAM",
      "NAME OF COMPANY": "Precision Camshafts Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE484I01029",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRECOT",
      "NAME OF COMPANY": "Precot Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-AUG-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE283A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRECWIRE",
      "NAME OF COMPANY": "Precision Wires India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE372C01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PREMEXPLN",
      "NAME OF COMPANY": "Premier Explosives Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE863B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PREMIERPOL",
      "NAME OF COMPANY": "Premier Polyfilm Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-DEC-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE309M01012",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PRESTIGE",
      "NAME OF COMPANY": "Prestige Estates Projects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE811K01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRICOLLTD",
      "NAME OF COMPANY": "Pricol Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-FEB-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE726V01018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PRIMESECU",
      "NAME OF COMPANY": "Prime Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUN-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE032B01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PRINCEPIPE",
      "NAME OF COMPANY": "Prince Pipes And Fittings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-DEC-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE689W01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRITI",
      "NAME OF COMPANY": "Priti International Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-MAR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE974Z01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRITIKAUTO",
      "NAME OF COMPANY": "Pritika Auto Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-AUG-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE583R01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PRIVISCL",
      "NAME OF COMPANY": "Privi Speciality Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAY-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE959A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PROZONER",
      "NAME OF COMPANY": "Prozone Realty Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-SEP-2012",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE195N01013",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "PRSMJOHNSN",
      "NAME OF COMPANY": "Prism Johnson Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-AUG-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE010A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PRUDENT",
      "NAME OF COMPANY": "Prudent Corporate Advisory Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-MAY-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00F201020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PRUDMOULI",
      "NAME OF COMPANY": "Prudential Sugar Corporation Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE024D01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PSB",
      "NAME OF COMPANY": "Punjab & Sind Bank",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-DEC-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE608A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PSPPROJECT",
      "NAME OF COMPANY": "PSP Projects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAY-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE488V01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PTC",
      "NAME OF COMPANY": "PTC India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE877F01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PTCIL",
      "NAME OF COMPANY": "PTC Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-JUN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE596F01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PTL",
      "NAME OF COMPANY": "PTL Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JAN-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE034D01049",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "PUNJABCHEM",
      "NAME OF COMPANY": "Punjab Chemicals & Crop Protection Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE277B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PURVA",
      "NAME OF COMPANY": "Puravankara Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-AUG-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE323I01011",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "PVP",
      "NAME OF COMPANY": "PVP Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE362A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PVRINOX",
      "NAME OF COMPANY": "PVR INOX Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JAN-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE191H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "PYRAMID",
      "NAME OF COMPANY": "Pyramid Technoplast Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0MIS01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "QUESS",
      "NAME OF COMPANY": "Quess Corp Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JUL-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE615P01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "QUICKHEAL",
      "NAME OF COMPANY": "Quick Heal Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-FEB-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE306L01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RACE",
      "NAME OF COMPANY": "Race Eco Chain Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE084Q01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RADAAN",
      "NAME OF COMPANY": "Radaan Mediaworks India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-FEB-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE874F01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RADHIKAJWE",
      "NAME OF COMPANY": "Radhika Jeweltech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUL-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE583V01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RADIANTCMS",
      "NAME OF COMPANY": "Radiant Cash Management Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JAN-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE855R01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RADICO",
      "NAME OF COMPANY": "Radico Khaitan Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-JUN-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE944F01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RADIOCITY",
      "NAME OF COMPANY": "Music Broadcast Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAR-2017",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE919I01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RAILTEL",
      "NAME OF COMPANY": "Railtel Corporation Of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-FEB-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0DD101019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAIN",
      "NAME OF COMPANY": "Rain Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAR-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE855B01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RAINBOW",
      "NAME OF COMPANY": "Rainbow Childrens Medicare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE961O01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAJESHEXPO",
      "NAME OF COMPANY": "Rajesh Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-FEB-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE343B01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RAJMET",
      "NAME OF COMPANY": "Rajnandini Metal Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-FEB-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00KV01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RAJRATAN",
      "NAME OF COMPANY": "Rajratan Global Wire Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-MAY-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE451D01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RAJRILTD",
      "NAME OF COMPANY": "Raj Rayon Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-MAR-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE533D01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RAJSREESUG",
      "NAME OF COMPANY": "Rajshree Sugars & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE562B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAJTV",
      "NAME OF COMPANY": "Raj Television Network Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-MAR-2007",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE952H01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "RALLIS",
      "NAME OF COMPANY": "Rallis India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-1999",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE613A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RAMANEWS",
      "NAME OF COMPANY": "Shree Rama Newsprint Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE278B01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAMAPHO",
      "NAME OF COMPANY": "Rama Phosphates Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-AUG-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE809A01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAMASTEEL",
      "NAME OF COMPANY": "Rama Steel Tubes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-AUG-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE230R01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RAMCOCEM",
      "NAME OF COMPANY": "The Ramco Cements Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-APR-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE331A01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RAMCOIND",
      "NAME OF COMPANY": "Ramco Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE614A01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RAMCOSYS",
      "NAME OF COMPANY": "Ramco Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE246B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAMKY",
      "NAME OF COMPANY": "Ramky Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE874I01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAMRAT",
      "NAME OF COMPANY": "Ram Ratna Wires Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUL-2022",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE207E01023",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "RANASUG",
      "NAME OF COMPANY": "Rana Sugars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-FEB-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE625B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RANEENGINE",
      "NAME OF COMPANY": "Rane Engine Valve Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE222J01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RANEHOLDIN",
      "NAME OF COMPANY": "Rane Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-SEP-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE384A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RATEGAIN",
      "NAME OF COMPANY": "Rategain Travel Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-DEC-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0CLI01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RATNAMANI",
      "NAME OF COMPANY": "Ratnamani Metals & Tubes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE703B01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RATNAVEER",
      "NAME OF COMPANY": "Ratnaveer Precision Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE05CZ01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RAYMOND",
      "NAME OF COMPANY": "Raymond Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-OCT-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE301A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RBA",
      "NAME OF COMPANY": "Restaurant Brands Asia Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07T201019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RBL",
      "NAME OF COMPANY": "Rane Brake Lining Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE244J01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RBLBANK",
      "NAME OF COMPANY": "RBL Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-AUG-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE976G01028",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RBZJEWEL",
      "NAME OF COMPANY": "RBZ Jewellers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-DEC-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0PEQ01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RCF",
      "NAME OF COMPANY": "Rashtriya Chemicals and Fertilizers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JAN-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE027A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RECLTD",
      "NAME OF COMPANY": "REC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAR-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE020B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "REDINGTON",
      "NAME OF COMPANY": "Redington Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE891D01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "REDTAPE",
      "NAME OF COMPANY": "Redtape Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0LXT01019",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "REFEX",
      "NAME OF COMPANY": "Refex Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-DEC-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE056I01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "REGENCERAM",
      "NAME OF COMPANY": "Regency Ceramics Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "05-JUN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE277C01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RELAXO",
      "NAME OF COMPANY": "Relaxo Footwears Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUN-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE131B01039",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RELCHEMQ",
      "NAME OF COMPANY": "Reliance Chemotex Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE750D01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RELIANCE",
      "NAME OF COMPANY": "Reliance Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-NOV-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE002A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RELIGARE",
      "NAME OF COMPANY": "Religare Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE621H01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RELINFRA",
      "NAME OF COMPANY": "Reliance Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE036A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "REMSONSIND",
      "NAME OF COMPANY": "Remsons Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "31-JAN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE474C01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RENUKA",
      "NAME OF COMPANY": "Shree Renuka Sugars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-OCT-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE087H01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "REPCOHOME",
      "NAME OF COMPANY": "Repco Home Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE612J01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "REPL",
      "NAME OF COMPANY": "Rudrabhishek Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE364Z01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "REPRO",
      "NAME OF COMPANY": "Repro India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-DEC-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE461B01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RESPONIND",
      "NAME OF COMPANY": "Responsive Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-OCT-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE688D01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RGL",
      "NAME OF COMPANY": "Renaissance Global Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-DEC-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE722H01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RHFL",
      "NAME OF COMPANY": "Reliance Home Finance Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-SEP-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE217K01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RHIM",
      "NAME OF COMPANY": "RHI MAGNESITA INDIA LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAR-2012",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE743M01012",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RHL",
      "NAME OF COMPANY": "Robust Hotels Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-APR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE508K01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RICOAUTO",
      "NAME OF COMPANY": "Rico Auto Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAY-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE209B01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RIIL",
      "NAME OF COMPANY": "Reliance Industrial Infrastructure Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-NOV-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE046A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RISHABH",
      "NAME OF COMPANY": "Rishabh Instruments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0N2P01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RITCO",
      "NAME OF COMPANY": "Ritco Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01EG01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RITES",
      "NAME OF COMPANY": "RITES Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-JUL-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE320J01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RKDL",
      "NAME OF COMPANY": "Ravi Kumar Distilleries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-DEC-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE722J01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RKEC",
      "NAME OF COMPANY": "RKEC Projects Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-DEC-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE786W01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RKFORGE",
      "NAME OF COMPANY": "Ramkrishna Forgings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAY-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE399G01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RML",
      "NAME OF COMPANY": "Rane (Madras) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-AUG-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE050H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ROHLTD",
      "NAME OF COMPANY": "Royal Orchid Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-FEB-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE283H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ROLEXRINGS",
      "NAME OF COMPANY": "Rolex Rings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE645S01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ROLLT",
      "NAME OF COMPANY": "Rollatainers Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-NOV-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE927A01040",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ROML",
      "NAME OF COMPANY": "Raj Oil Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE294G01026",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ROSSARI",
      "NAME OF COMPANY": "Rossari Biotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUL-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02A801020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ROSSELLIND",
      "NAME OF COMPANY": "Rossell India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-SEP-2012",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE847C01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ROTO",
      "NAME OF COMPANY": "Roto Pumps Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-APR-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE535D01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ROUTE",
      "NAME OF COMPANY": "ROUTE MOBILE LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-SEP-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE450U01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RPGLIFE",
      "NAME OF COMPANY": "RPG Life Sciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JUN-2008",
      "PAID UP VALUE": 8,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE105J01010",
      "FACE VALUE": 8
    },
    {
      "SYMBOL": "RPOWER",
      "NAME OF COMPANY": "Reliance Power Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-FEB-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE614G01033",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RPPINFRA",
      "NAME OF COMPANY": "R.P.P. Infra Projects Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-DEC-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE324L01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RPPL",
      "NAME OF COMPANY": "Rajshree Polypack Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE760W01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RPSGVENT",
      "NAME OF COMPANY": "RPSG VENTURES LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-JAN-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE425Y01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RPTECH",
      "NAME OF COMPANY": "Rashi Peripherals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2024",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0J1F01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "RRKABEL",
      "NAME OF COMPANY": "R R Kabel Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE777K01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "RSSOFTWARE",
      "NAME OF COMPANY": "R. S. Software (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-MAY-1999",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE165B01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "RSWM",
      "NAME OF COMPANY": "RSWM Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE611A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RSYSTEMS",
      "NAME OF COMPANY": "R Systems International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-APR-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE411H01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RTNINDIA",
      "NAME OF COMPANY": "RattanIndia Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JUL-2012",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE834M01019",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "RTNPOWER",
      "NAME OF COMPANY": "RattanIndia Power Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-OCT-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE399K01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RUBYMILLS",
      "NAME OF COMPANY": "The Ruby Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE301D01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "RUCHINFRA",
      "NAME OF COMPANY": "Ruchi Infrastructure Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-OCT-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE413B01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RUCHIRA",
      "NAME OF COMPANY": "Ruchira Papers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE803H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RUPA",
      "NAME OF COMPANY": "Rupa & Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-DEC-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE895B01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RUSHIL",
      "NAME OF COMPANY": "Rushil Decor Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUL-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE573K01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RUSTOMJEE",
      "NAME OF COMPANY": "Keystone Realtors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE263M01029",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "RVHL",
      "NAME OF COMPANY": "Ravinder Heights Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-DEC-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE09E501017",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "RVNL",
      "NAME OF COMPANY": "Rail Vikas Nigam Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-APR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE415G01027",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "S&SPOWER",
      "NAME OF COMPANY": "S&S Power Switchgears Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE902B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SABEVENTS",
      "NAME OF COMPANY": "Sab Events & Governance Now Media Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "15-SEP-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE860T01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SADBHAV",
      "NAME OF COMPANY": "Sadbhav Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE226H01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SADBHIN",
      "NAME OF COMPANY": "Sadbhav Infrastructure Project Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-SEP-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE764L01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SADHNANIQ",
      "NAME OF COMPANY": "Sadhana Nitrochem Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAY-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE888C01040",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SAFARI",
      "NAME OF COMPANY": "Safari Industries (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-SEP-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE429E01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SAGARDEEP",
      "NAME OF COMPANY": "Sagardeep Alloys Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-JAN-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE976T01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SAGCEM",
      "NAME OF COMPANY": "Sagar Cements Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JAN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE229C01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SAH",
      "NAME OF COMPANY": "Sah Polymers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JAN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE035801013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SAHYADRI",
      "NAME OF COMPANY": "Sahyadri Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-APR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE280H01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SAIL",
      "NAME OF COMPANY": "Steel Authority of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JUL-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE114A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SAKAR",
      "NAME OF COMPANY": "Sakar Healthcare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-APR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE732S01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SAKHTISUG",
      "NAME OF COMPANY": "Sakthi Sugars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE623A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SAKSOFT",
      "NAME OF COMPANY": "Saksoft Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE667G01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SAKUMA",
      "NAME OF COMPANY": "Sakuma Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAR-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE190H01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SALASAR",
      "NAME OF COMPANY": "Salasar Techno Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-JUL-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE170V01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SALONA",
      "NAME OF COMPANY": "Salona Cotspin Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE498E01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SALSTEEL",
      "NAME OF COMPANY": "S.A.L. Steel Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "24-NOV-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE658G01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SALZERELEC",
      "NAME OF COMPANY": "Salzer Electronics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-DEC-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE457F01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SAMBHAAV",
      "NAME OF COMPANY": "Sambhaav Media Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUN-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE699B01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SAMHI",
      "NAME OF COMPANY": "Samhi Hotels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-SEP-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE08U801020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SAMPANN",
      "NAME OF COMPANY": "Sampann Utpadan India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-JUL-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE735M01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANDESH",
      "NAME OF COMPANY": "The Sandesh Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-NOV-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE583B01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANDHAR",
      "NAME OF COMPANY": "Sandhar Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-APR-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE278H01035",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANDUMA",
      "NAME OF COMPANY": "Sandur Manganese & Iron Ores Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE149K01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANGAMIND",
      "NAME OF COMPANY": "Sangam (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUL-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE495C01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANGHIIND",
      "NAME OF COMPANY": "Sanghi Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE999B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANGHVIMOV",
      "NAME OF COMPANY": "Sanghvi Movers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JAN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE989A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SANGINITA",
      "NAME OF COMPANY": "Sanginita Chemicals Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "15-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE753W01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANOFI",
      "NAME OF COMPANY": "Sanofi India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-MAY-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE058A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SANSERA",
      "NAME OF COMPANY": "Sansera Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-SEP-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE953O01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SAPPHIRE",
      "NAME OF COMPANY": "Sapphire Foods India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE806T01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SARDAEN",
      "NAME OF COMPANY": "Sarda Energy & Minerals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-DEC-2009",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE385C01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SAREGAMA",
      "NAME OF COMPANY": "Saregama India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JUL-1997",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE979A01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SARLAPOLY",
      "NAME OF COMPANY": "Sarla Performance Fibers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JAN-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE453D01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SARVESHWAR",
      "NAME OF COMPANY": "Sarveshwar Foods Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-DEC-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE324X01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SASKEN",
      "NAME OF COMPANY": "Sasken Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-SEP-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE231F01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SASTASUNDR",
      "NAME OF COMPANY": "Sastasundar Ventures Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-OCT-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE019J01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SATIA",
      "NAME OF COMPANY": "Satia Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUL-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE170E01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SATIN",
      "NAME OF COMPANY": "Satin Creditcare Network Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE836B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SATINDLTD",
      "NAME OF COMPANY": "Sat Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE065D01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SBC",
      "NAME OF COMPANY": "SBC Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-NOV-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE04AK01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SBCL",
      "NAME OF COMPANY": "Shivalik Bimetal Controls Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE386D01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SBFC",
      "NAME OF COMPANY": "SBFC Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE423Y01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SBGLP",
      "NAME OF COMPANY": "Suratwwala Business Group Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-FEB-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE05ST01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SBICARD",
      "NAME OF COMPANY": "SBI Cards and Payment Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-MAR-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE018E01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SBILIFE",
      "NAME OF COMPANY": "SBI Life Insurance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-OCT-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE123W01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SBIN",
      "NAME OF COMPANY": "State Bank of India",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE062A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SCHAEFFLER",
      "NAME OF COMPANY": "Schaeffler India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-NOV-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE513A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SCHAND",
      "NAME OF COMPANY": "S Chand And Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE807K01035",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SCHNEIDER",
      "NAME OF COMPANY": "Schneider Electric Infrastructure Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-MAR-2012",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE839M01018",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SCI",
      "NAME OF COMPANY": "Shipping Corporation Of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-AUG-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE109A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SCPL",
      "NAME OF COMPANY": "Sheetal Cool Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE501Y01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SDBL",
      "NAME OF COMPANY": "Som Distilleries & Breweries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-MAR-2014",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE480C01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SEAMECLTD",
      "NAME OF COMPANY": "Seamec Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-JUN-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE497B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SECMARK",
      "NAME OF COMPANY": "SecMark Consultancy Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0BTM01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SECURCRED",
      "NAME OF COMPANY": "SecUR Credentials Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-OCT-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE195Y01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SECURKLOUD",
      "NAME OF COMPANY": "SECUREKLOUD TECHNOLOGIES LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "29-JAN-2014",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE650K01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SELAN",
      "NAME OF COMPANY": "Selan Exploration Technology Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-SEP-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE818A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SELMC",
      "NAME OF COMPANY": "SEL Manufacturing Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "26-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE105I01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SEMAC",
      "NAME OF COMPANY": "SEMAC CONSULTANTS LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE617A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SENCO",
      "NAME OF COMPANY": "Senco Gold Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE602W01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SEPC",
      "NAME OF COMPANY": "SEPC Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-FEB-2008",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE964H01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SEQUENT",
      "NAME OF COMPANY": "Sequent Scientific Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAR-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE807F01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SERVOTECH",
      "NAME OF COMPANY": "Servotech Power Systems Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-SEP-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE782X01033",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SESHAPAPER",
      "NAME OF COMPANY": "Seshasayee Paper and Boards Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE630A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SETCO",
      "NAME OF COMPANY": "Setco Automotive Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "01-JUL-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE878E01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SEYAIND",
      "NAME OF COMPANY": "Seya Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE573R01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SFL",
      "NAME OF COMPANY": "Sheela Foam Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-DEC-2016",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE916U01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SGIL",
      "NAME OF COMPANY": "Synergy Green Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00QT01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SGL",
      "NAME OF COMPANY": "STL Global Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-APR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE353H01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHAH",
      "NAME OF COMPANY": "Shah Metacorp Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-OCT-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE482J01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SHAHALLOYS",
      "NAME OF COMPANY": "Shah Alloys Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-JUN-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE640C01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHAILY",
      "NAME OF COMPANY": "Shaily Engineering Plastics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-APR-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE151G01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SHAKTIPUMP",
      "NAME OF COMPANY": "Shakti Pumps (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-JAN-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE908D01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHALBY",
      "NAME OF COMPANY": "Shalby Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE597J01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHALPAINTS",
      "NAME OF COMPANY": "Shalimar Paints Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAR-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE849C01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SHANKARA",
      "NAME OF COMPANY": "Shankara Building Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-APR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE274V01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHANTI",
      "NAME OF COMPANY": "Shanti Overseas (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-SEP-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE933X01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHANTIGEAR",
      "NAME OF COMPANY": "Shanthi Gears Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JAN-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE631A01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SHARDACROP",
      "NAME OF COMPANY": "Sharda Cropchem Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-SEP-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE221J01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHARDAMOTR",
      "NAME OF COMPANY": "Sharda Motor Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-SEP-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE597I01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SHAREINDIA",
      "NAME OF COMPANY": "Share India Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-SEP-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE932X01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHEMAROO",
      "NAME OF COMPANY": "Shemaroo Entertainment Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-OCT-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE363M01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHILPAMED",
      "NAME OF COMPANY": "Shilpa Medicare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-DEC-2009",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE790G01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SHIVALIK",
      "NAME OF COMPANY": "Shivalik Rasayan Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-DEC-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE788J01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SHIVAMAUTO",
      "NAME OF COMPANY": "Shivam Autotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-NOV-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE637H01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SHIVAMILLS",
      "NAME OF COMPANY": "Shiva Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-FEB-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE644Y01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHIVATEX",
      "NAME OF COMPANY": "Shiva Texyarn Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "26-DEC-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE705C01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHK",
      "NAME OF COMPANY": "S H Kelkar and Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-NOV-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE500L01026",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHOPERSTOP",
      "NAME OF COMPANY": "Shoppers Stop Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAY-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE498B01024",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SHRADHA",
      "NAME OF COMPANY": "Shradha Infraprojects Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-OCT-2020",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE715Y01023",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SHREDIGCEM",
      "NAME OF COMPANY": "Shree Digvijay Cement Co.Ltd",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE232A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHREECEM",
      "NAME OF COMPANY": "SHREE CEMENT LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-APR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE070A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHREEPUSHK",
      "NAME OF COMPANY": "Shree Pushkar Chemicals & Fertilisers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-SEP-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE712K01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHREERAMA",
      "NAME OF COMPANY": "Shree Rama Multi-Tech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "13-MAR-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE879A01019",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SHRENIK",
      "NAME OF COMPANY": "Shrenik Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-AUG-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE632X01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SHREYANIND",
      "NAME OF COMPANY": "Shreyans Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE231C01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHREYAS",
      "NAME OF COMPANY": "Shreyas Shipping & Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE757B01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHRIPISTON",
      "NAME OF COMPANY": "Shriram Pistons & Rings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-JUN-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE526E01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHRIRAMFIN",
      "NAME OF COMPANY": "Shriram Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-DEC-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE721A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHRIRAMPPS",
      "NAME OF COMPANY": "Shriram Properties Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE217L01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHYAMCENT",
      "NAME OF COMPANY": "Shyam Century Ferrous Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-JUL-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE979R01011",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SHYAMMETL",
      "NAME OF COMPANY": "Shyam Metalics and Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE810G01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SHYAMTEL",
      "NAME OF COMPANY": "Shyam Telecom Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-NOV-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE635A01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SICALLOG",
      "NAME OF COMPANY": "Sical Logistics Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE075B01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIEMENS",
      "NAME OF COMPANY": "Siemens Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-SEP-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE003A01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SIGACHI",
      "NAME OF COMPANY": "Sigachi Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-NOV-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0D0K01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SIGIND",
      "NAME OF COMPANY": "Signet Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-AUG-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE529F01035",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIGMA",
      "NAME OF COMPANY": "Sigma Solve Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-JUN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0A0S01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIGNATURE",
      "NAME OF COMPANY": "Signatureglobal (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-SEP-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE903U01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SIGNPOST",
      "NAME OF COMPANY": "Signpost India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-FEB-2024",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0KGZ01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SIKKO",
      "NAME OF COMPANY": "Sikko Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-OCT-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE112X01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIL",
      "NAME OF COMPANY": "Standard Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "27-JAN-2004",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE173A01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SILGO",
      "NAME OF COMPANY": "Silgo Retail Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "03-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01II01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SILINV",
      "NAME OF COMPANY": "SIL Investments Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-MAY-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE923A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SILLYMONKS",
      "NAME OF COMPANY": "Silly Monks Entertainment Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-JUL-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE203Y01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SILVERTUC",
      "NAME OF COMPANY": "Silver Touch Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE625X01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIMBHALS",
      "NAME OF COMPANY": "Simbhaoli Sugars Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAR-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE748T01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIMPLEXINF",
      "NAME OF COMPANY": "Simplex Infrastructures Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "09-MAR-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE059B01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SINDHUTRAD",
      "NAME OF COMPANY": "Sindhu Trade Links Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE325D01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SINTERCOM",
      "NAME OF COMPANY": "Sintercom India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE129Z01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIRCA",
      "NAME OF COMPANY": "Sirca Paints India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE792Z01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SIS",
      "NAME OF COMPANY": "SIS LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-AUG-2017",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE285J01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SIYSIL",
      "NAME OF COMPANY": "Siyaram Silk Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JAN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE076B01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SJS",
      "NAME OF COMPANY": "S.J.S. Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE284S01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SJVN",
      "NAME OF COMPANY": "SJVN Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-MAY-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE002L01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SKFINDIA",
      "NAME OF COMPANY": "SKF India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JAN-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE640A01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SKIPPER",
      "NAME OF COMPANY": "Skipper Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-MAY-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE439E01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SKMEGGPROD",
      "NAME OF COMPANY": "SKM Egg Products Export (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAR-1997",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE411D01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SKYGOLD",
      "NAME OF COMPANY": "Sky Gold Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-JAN-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01IU01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SMARTLINK",
      "NAME OF COMPANY": "Smartlink Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-APR-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE178C01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SMCGLOBAL",
      "NAME OF COMPANY": "SMC Global Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-FEB-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE103C01036",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SMLISUZU",
      "NAME OF COMPANY": "SML Isuzu Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-AUG-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE294B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SMLT",
      "NAME OF COMPANY": "Sarthak Metals Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-NOV-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE017W01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SMSLIFE",
      "NAME OF COMPANY": "SMS Lifesciences India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-AUG-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE320X01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SMSPHARMA",
      "NAME OF COMPANY": "SMS Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-FEB-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE812G01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SNOWMAN",
      "NAME OF COMPANY": "Snowman Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-SEP-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE734N01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SOBHA",
      "NAME OF COMPANY": "Sobha Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE671H01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SOFTTECH",
      "NAME OF COMPANY": "Softtech Engineers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-FEB-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE728Z01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SOLARA",
      "NAME OF COMPANY": "Solara Active Pharma Sciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUN-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE624Z01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SOLARINDS",
      "NAME OF COMPANY": "Solar Industries India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE343H01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SOMANYCERA",
      "NAME OF COMPANY": "Somany Ceramics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-NOV-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE355A01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SOMATEX",
      "NAME OF COMPANY": "Soma Textiles & Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-AUG-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE314C01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SOMICONVEY",
      "NAME OF COMPANY": "Somi Conveyor Beltings Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-JUL-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE323J01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SONACOMS",
      "NAME OF COMPANY": "Sona BLW Precision Forgings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE073K01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SONAMLTD",
      "NAME OF COMPANY": "SONAM LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00LM01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SONATSOFTW",
      "NAME OF COMPANY": "Sonata Software Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-1999",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE269A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SOTL",
      "NAME OF COMPANY": "Savita Oil Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUN-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE035D01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SOUTHBANK",
      "NAME OF COMPANY": "The South Indian Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-DEC-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE683A01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SOUTHWEST",
      "NAME OF COMPANY": "South West Pinnacle Exploration Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-APR-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE980Y01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SPAL",
      "NAME OF COMPANY": "S. P. Apparels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-AUG-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE212I01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SPANDANA",
      "NAME OF COMPANY": "Spandana Sphoorty Financial Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-AUG-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE572J01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SPARC",
      "NAME OF COMPANY": "Sun Pharma Advanced Research Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-JUL-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE232I01014",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SPCENET",
      "NAME OF COMPANY": "Spacenet Enterprises India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JAN-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE970N01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SPECIALITY",
      "NAME OF COMPANY": "Speciality Restaurants Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAY-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE247M01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SPENCERS",
      "NAME OF COMPANY": "Spencer's Retail Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-JAN-2019",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE020801028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SPIC",
      "NAME OF COMPANY": "Southern Petrochemicals Industries Corporation  Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JAN-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE147A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SPLIL",
      "NAME OF COMPANY": "SPL Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-JUL-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE978G01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SPLPETRO",
      "NAME OF COMPANY": "Supreme Petrochem Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAY-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE663A01033",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SPMLINFRA",
      "NAME OF COMPANY": "SPML Infra Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-FEB-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE937A01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SPORTKING",
      "NAME OF COMPANY": "Sportking India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-AUG-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE885H01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SPYL",
      "NAME OF COMPANY": "Shekhawati Poly-Yarn Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-JAN-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE268L01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SREEL",
      "NAME OF COMPANY": "Sreeleathers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-JAN-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE099F01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SRF",
      "NAME OF COMPANY": "SRF Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-AUG-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE647A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SRGHFL",
      "NAME OF COMPANY": "SRG Housing Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE559N01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SRHHYPOLTD",
      "NAME OF COMPANY": "Sree Rayalaseema Hi-Strength Hypo Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-MAY-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE917H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SRPL",
      "NAME OF COMPANY": "Shree Ram Proteins Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-SEP-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE008Z01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SSWL",
      "NAME OF COMPANY": "Steel Strips Wheels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JUN-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE802C01033",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "STAR",
      "NAME OF COMPANY": "Strides Pharma Science Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-FEB-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE939A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STARCEMENT",
      "NAME OF COMPANY": "Star Cement Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUN-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE460H01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "STARHEALTH",
      "NAME OF COMPANY": "Star Health and Allied Insurance Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE575P01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STARPAPER",
      "NAME OF COMPANY": "Star Paper Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE733A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STARTECK",
      "NAME OF COMPANY": "Starteck Finance Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE992I01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STCINDIA",
      "NAME OF COMPANY": "The State Trading Corporation of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE655A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STEELCAS",
      "NAME OF COMPANY": "Steelcast Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-NOV-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE124E01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "STEELCITY",
      "NAME OF COMPANY": "Steel City Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUN-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE395H01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STEELXIND",
      "NAME OF COMPANY": "STEEL EXCHANGE INDIA LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUL-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE503B01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "STEL",
      "NAME OF COMPANY": "Stel Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-FEB-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE577L01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STERTOOLS",
      "NAME OF COMPANY": "Sterling Tools Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-FEB-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE334A01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "STLTECH",
      "NAME OF COMPANY": "Sterlite Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-DEC-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE089C01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "STOVEKRAFT",
      "NAME OF COMPANY": "Stove Kraft Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-FEB-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00IN01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "STYLAMIND",
      "NAME OF COMPANY": "Stylam Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-AUG-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE239C01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "STYRENIX",
      "NAME OF COMPANY": "Styrenix Performance Materials Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE189B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUBEXLTD",
      "NAME OF COMPANY": "Subex Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-2020",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE754A01055",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SUBROS",
      "NAME OF COMPANY": "Subros Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-JUL-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE287B01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SUDARSCHEM",
      "NAME OF COMPANY": "Sudarshan Chemical Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAY-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE659A01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SUKHJITS",
      "NAME OF COMPANY": "Sukhjit Starch & Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE450E01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SULA",
      "NAME OF COMPANY": "Sula Vineyards Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-DEC-2022",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE142Q01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SUMEETINDS",
      "NAME OF COMPANY": "Sumeet Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "10-DEC-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE235C01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUMICHEM",
      "NAME OF COMPANY": "Sumitomo Chemical India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JAN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE258G01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUMIT",
      "NAME OF COMPANY": "Sumit Woods Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-JUL-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE748Z01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUMMITSEC",
      "NAME OF COMPANY": "Summit Securities Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE519C01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUNCLAY",
      "NAME OF COMPANY": "Sundaram Clayton Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-DEC-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0Q3R01026",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SUNDARAM",
      "NAME OF COMPANY": "Sundaram Multi Pap Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-JUN-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE108E01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUNDARMFIN",
      "NAME OF COMPANY": "Sundaram Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JAN-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE660A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUNDARMHLD",
      "NAME OF COMPANY": "Sundaram Finance Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAR-2018",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE202Z01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SUNDRMBRAK",
      "NAME OF COMPANY": "Sundaram Brake Linings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JUL-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE073D01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUNDRMFAST",
      "NAME OF COMPANY": "Sundram Fasteners Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUN-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE387A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUNFLAG",
      "NAME OF COMPANY": "Sunflag Iron And Steel Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-SEP-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE947A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUNPHARMA",
      "NAME OF COMPANY": "Sun Pharmaceutical Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE044A01036",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUNTECK",
      "NAME OF COMPANY": "Sunteck Realty Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-NOV-2009",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE805D01034",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUNTV",
      "NAME OF COMPANY": "Sun TV Network Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-APR-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE424H01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SUPERHOUSE",
      "NAME OF COMPANY": "Superhouse Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-SEP-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE712B01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUPERSPIN",
      "NAME OF COMPANY": "Super Spinning Mills Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-JUL-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE662A01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUPRAJIT",
      "NAME OF COMPANY": "Suprajit Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-FEB-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE399C01030",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUPREMEIND",
      "NAME OF COMPANY": "Supreme Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-JUL-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE195A01028",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SUPREMEINF",
      "NAME OF COMPANY": "Supreme Infrastructure India Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "18-OCT-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE550H01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUPRIYA",
      "NAME OF COMPANY": "Supriya Lifescience Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-DEC-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07RO01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SURAJEST",
      "NAME OF COMPANY": "Suraj Estate Developers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2023",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE843S01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SURANASOL",
      "NAME OF COMPANY": "Surana Solar Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-JAN-2011",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE272L01022",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SURANAT&P",
      "NAME OF COMPANY": "Surana Telecom and Power Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "22-MAY-2002",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE130B01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SURYALAXMI",
      "NAME OF COMPANY": "Suryalakshmi Cotton Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUN-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE713B01026",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SURYAROSNI",
      "NAME OF COMPANY": "Surya Roshni Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE335A01020",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "SURYODAY",
      "NAME OF COMPANY": "Suryoday Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-MAR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE428Q01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUTLEJTEX",
      "NAME OF COMPANY": "Sutlej Textiles and Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-DEC-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE645H01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUULD",
      "NAME OF COMPANY": "Suumaya Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE591Q01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SUVEN",
      "NAME OF COMPANY": "Suven Life Sciences Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "23-OCT-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE495B01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUVENPHAR",
      "NAME OF COMPANY": "Suven Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2020",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03QK01018",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUVIDHAA",
      "NAME OF COMPANY": "Suvidhaa Infoserve Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "31-MAR-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE018401013",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SUZLON",
      "NAME OF COMPANY": "Suzlon Energy Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-OCT-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE040H01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SVLL",
      "NAME OF COMPANY": "Shree Vasu Logistics Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "21-APR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00CE01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SVPGLOB",
      "NAME OF COMPANY": "SVP GLOBAL TEXTILES LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "14-JUL-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE308E01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SWANENERGY",
      "NAME OF COMPANY": "Swan Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-MAY-2012",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE665A01038",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SWARAJENG",
      "NAME OF COMPANY": "Swaraj Engines Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-DEC-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE277A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SWELECTES",
      "NAME OF COMPANY": "Swelect Energy Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE409B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SWSOLAR",
      "NAME OF COMPANY": "Sterling and Wilson Renewable Energy Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-AUG-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00M201021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SYMPHONY",
      "NAME OF COMPANY": "Symphony Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUN-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE225D01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "SYNCOMF",
      "NAME OF COMPANY": "Syncom Formulations (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-NOV-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE312C01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "SYNGENE",
      "NAME OF COMPANY": "Syngene International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE398R01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "SYRMA",
      "NAME OF COMPANY": "Syrma SGS Technology Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-AUG-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0DYJ01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TAINWALCHM",
      "NAME OF COMPANY": "Tainwala Chemical and Plastic (I) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUL-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE123C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TAJGVK",
      "NAME OF COMPANY": "Taj GVK Hotels & Resorts Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2000",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE586B01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TAKE",
      "NAME OF COMPANY": "Take Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-AUG-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE142I01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TALBROAUTO",
      "NAME OF COMPANY": "Talbros Automotive Components Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-SEP-2006",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE187D01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TANLA",
      "NAME OF COMPANY": "Tanla Platforms Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JAN-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE483C01032",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TARAPUR",
      "NAME OF COMPANY": "Tarapur Transformers Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-MAY-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE747K01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TARC",
      "NAME OF COMPANY": "Anant Raj Global Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-DEC-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0EK901012",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TARMAT",
      "NAME OF COMPANY": "Tarmat Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-JUL-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE924H01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TARSONS",
      "NAME OF COMPANY": "Tarsons Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-NOV-2021",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE144Z01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TASTYBITE",
      "NAME OF COMPANY": "Tasty Bite Eatables Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-MAR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE488B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TATACHEM",
      "NAME OF COMPANY": "Tata Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-APR-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE092A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TATACOMM",
      "NAME OF COMPANY": "Tata Communications Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE151A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TATACONSUM",
      "NAME OF COMPANY": "TATA CONSUMER PRODUCTS LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-NOV-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE192A01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TATAELXSI",
      "NAME OF COMPANY": "Tata Elxsi Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-SEP-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE670A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TATAINVEST",
      "NAME OF COMPANY": "Tata Investment Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-JUN-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE672A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TATAMOTORS",
      "NAME OF COMPANY": "Tata Motors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-JUL-1998",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE155A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TATAMTRDVR",
      "NAME OF COMPANY": "Tata Motors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-NOV-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "IN9155A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TATAPOWER",
      "NAME OF COMPANY": "Tata Power Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-1996",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE245A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TATASTEEL",
      "NAME OF COMPANY": "Tata Steel Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-NOV-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE081A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TATATECH",
      "NAME OF COMPANY": "Tata Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-NOV-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE142M01025",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TATVA",
      "NAME OF COMPANY": "Tatva Chintan Pharma Chem Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-JUL-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0GK401011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TBZ",
      "NAME OF COMPANY": "Tribhovandas Bhimji Zaveri Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE760L01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TCI",
      "NAME OF COMPANY": "Transport Corporation of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-2002",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE688A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TCIEXP",
      "NAME OF COMPANY": "TCI Express Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2016",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE586V01016",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TCLCONS",
      "NAME OF COMPANY": "Tantia Constructions Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "16-OCT-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE388G01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TCNSBRANDS",
      "NAME OF COMPANY": "TCNS Clothing Co. Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JUL-2018",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE778U01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TCPLPACK",
      "NAME OF COMPANY": "TCPL Packaging Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-OCT-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE822C01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TCS",
      "NAME OF COMPANY": "Tata Consultancy Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-AUG-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE467B01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TDPOWERSYS",
      "NAME OF COMPANY": "TD Power Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-SEP-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE419M01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TEAMLEASE",
      "NAME OF COMPANY": "Teamlease Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-FEB-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE985S01024",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TECHIN",
      "NAME OF COMPANY": "Techindia Nirman Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-SEP-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE778A01021",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TECHM",
      "NAME OF COMPANY": "Tech Mahindra Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-AUG-2006",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE669C01036",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "TECHNOE",
      "NAME OF COMPANY": "Techno Electric & Engineering Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-DEC-2018",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE285K01026",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TECILCHEM",
      "NAME OF COMPANY": "TECIL Chemicals and Hydro Power Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-DEC-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 50,
      "ISIN NUMBER": "INE014B01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TEGA",
      "NAME OF COMPANY": "Tega Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE011K01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TEJASNET",
      "NAME OF COMPANY": "Tejas Networks Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-JUN-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE010J01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TEMBO",
      "NAME OF COMPANY": "Tembo Global Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-APR-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE869Y01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TERASOFT",
      "NAME OF COMPANY": "Tera Software Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-DEC-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE482B01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TEXINFRA",
      "NAME OF COMPANY": "Texmaco Infrastructure & Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-SEP-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE435C01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TEXMOPIPES",
      "NAME OF COMPANY": "Texmo Pipes and Products Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE141K01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TEXRAIL",
      "NAME OF COMPANY": "Texmaco Rail & Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAR-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE621L01012",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TFCILTD",
      "NAME OF COMPANY": "Tourism Finance Corporation of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-JUL-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE305A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TFL",
      "NAME OF COMPANY": "Transwarranty Finance Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "26-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE804H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TGBHOTELS",
      "NAME OF COMPANY": "TGB Banquets And Hotels Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-MAY-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE797H01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "THANGAMAYL",
      "NAME OF COMPANY": "Thangamayil Jewellery Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-FEB-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE085J01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "THEINVEST",
      "NAME OF COMPANY": "The Investment Trust Of India Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "02-AUG-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE924D01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "THEJO",
      "NAME OF COMPANY": "Thejo Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE121N01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "THEMISMED",
      "NAME OF COMPANY": "Themis Medicare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-APR-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE083B01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "THERMAX",
      "NAME OF COMPANY": "Thermax Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-AUG-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE152A01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "THOMASCOOK",
      "NAME OF COMPANY": "Thomas Cook  (India)  Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUN-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE332A01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "THOMASCOTT",
      "NAME OF COMPANY": "Thomas Scott (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-JAN-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE480M01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "THYROCARE",
      "NAME OF COMPANY": "Thyrocare Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE594H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TI",
      "NAME OF COMPANY": "Tilaknagar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JUL-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE133E01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TIDEWATER",
      "NAME OF COMPANY": "Tide Water Oil Company (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JAN-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE484C01030",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TIIL",
      "NAME OF COMPANY": "Technocraft Industries (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE545H01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TIINDIA",
      "NAME OF COMPANY": "Tube Investments of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-NOV-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE974X01010",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TIJARIA",
      "NAME OF COMPANY": "Tijaria Polypipes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-OCT-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE440L01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TIL",
      "NAME OF COMPANY": "TIL Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "27-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE806C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TIMESGTY",
      "NAME OF COMPANY": "Times Guaranty Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-JUN-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE289C01025",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TIMETECHNO",
      "NAME OF COMPANY": "Time Technoplast Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-JUN-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE508G01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TIMKEN",
      "NAME OF COMPANY": "Timken India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE325A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TIPSFILMS",
      "NAME OF COMPANY": "Tips Films Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "06-OCT-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0LQS01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TIPSINDLTD",
      "NAME OF COMPANY": "TIPS Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-NOV-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE716B01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TIRUMALCHM",
      "NAME OF COMPANY": "Thirumalai Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAY-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE338A01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TIRUPATIFL",
      "NAME OF COMPANY": "Tirupati Forge Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-AUG-2020",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE319Y01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TITAGARH",
      "NAME OF COMPANY": "TITAGARH RAIL SYSTEMS LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-APR-2008",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE615H01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TITAN",
      "NAME OF COMPANY": "Titan Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-SEP-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE280A01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TMB",
      "NAME OF COMPANY": "Tamilnad Mercantile Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-SEP-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE668A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TNPETRO",
      "NAME OF COMPANY": "Tamilnadu PetroProducts Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-OCT-1999",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE148A01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TNPL",
      "NAME OF COMPANY": "Tamil Nadu Newsprint & Papers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE107A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TNTELE",
      "NAME OF COMPANY": "Tamilnadu Telecommunication Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-FEB-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE141D01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TOKYOPLAST",
      "NAME OF COMPANY": "Tokyo Plast International Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-OCT-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE932C01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TORNTPHARM",
      "NAME OF COMPANY": "Torrent Pharmaceuticals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-NOV-2002",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE685A01028",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "TORNTPOWER",
      "NAME OF COMPANY": "Torrent Power Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-NOV-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE813H01021",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TOTAL",
      "NAME OF COMPANY": "Total Transport Systems Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-AUG-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE336X01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TOUCHWOOD",
      "NAME OF COMPANY": "Touchwood Entertainment Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JAN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE486Y01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TPHQ",
      "NAME OF COMPANY": "Teamo Productions HQ Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-JAN-2009",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE065J01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TPLPLASTEH",
      "NAME OF COMPANY": "TPL Plastech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-MAY-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE413G01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TRACXN",
      "NAME OF COMPANY": "Tracxn Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-OCT-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0HMF01019",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TREEHOUSE",
      "NAME OF COMPANY": "Tree House Education & Accessories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-AUG-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE040M01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TREJHARA",
      "NAME OF COMPANY": "TREJHARA SOLUTIONS LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "28-DEC-2018",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE00CA01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TREL",
      "NAME OF COMPANY": "Transindia Real Estate Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-AUG-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0O3901029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TRENT",
      "NAME OF COMPANY": "Trent Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-JUN-2004",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE849A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TRF",
      "NAME OF COMPANY": "TRF Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "26-MAR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE391D01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TRIDENT",
      "NAME OF COMPANY": "Trident Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-FEB-2001",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE064C01022",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TRIGYN",
      "NAME OF COMPANY": "Trigyn Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-APR-1998",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE948A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TRIL",
      "NAME OF COMPANY": "Transformers And Rectifiers (India) Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-DEC-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE763I01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TRITURBINE",
      "NAME OF COMPANY": "Triveni Turbine Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-OCT-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE152M01016",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TRIVENI",
      "NAME OF COMPANY": "Triveni Engineering & Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-DEC-2005",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE256C01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TRU",
      "NAME OF COMPANY": "TruCap Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE615R01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TTKHLTCARE",
      "NAME OF COMPANY": "TTK Healthcare Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-DEC-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE910C01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TTKPRESTIG",
      "NAME OF COMPANY": "TTK Prestige Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-DEC-1999",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE690A01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TTL",
      "NAME OF COMPANY": "T T Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE592B01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TTML",
      "NAME OF COMPANY": "Tata Teleservices (Maharashtra) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-OCT-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE517B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TV18BRDCST",
      "NAME OF COMPANY": "TV18 Broadcast Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-FEB-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE886H01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "TVSELECT",
      "NAME OF COMPANY": "TVS Electronics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "26-DEC-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE236G01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TVSHLTD",
      "NAME OF COMPANY": "TVS Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-OCT-2012",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE105A01035",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "TVSMOTOR",
      "NAME OF COMPANY": "TVS Motor Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-AUG-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE494B01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TVSSCS",
      "NAME OF COMPANY": "TVS Supply Chain Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE395N01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "TVSSRICHAK",
      "NAME OF COMPANY": "TVS Srichakra Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-FEB-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE421C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "TVTODAY",
      "NAME OF COMPANY": "TV Today Network Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-JAN-2004",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE038F01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "TVVISION",
      "NAME OF COMPANY": "TV Vision Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-SEP-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE871L01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UBL",
      "NAME OF COMPANY": "United Breweries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE686F01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "UCAL",
      "NAME OF COMPANY": "UCAL LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE139B01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UCOBANK",
      "NAME OF COMPANY": "UCO Bank",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-OCT-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE691A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UDS",
      "NAME OF COMPANY": "Updater Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE851I01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UFLEX",
      "NAME OF COMPANY": "UFLEX Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE516A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UFO",
      "NAME OF COMPANY": "UFO Moviez India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-MAY-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE527H01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UGARSUGAR",
      "NAME OF COMPANY": "The Ugar Sugar Works Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-AUG-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE071E01023",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "UGROCAP",
      "NAME OF COMPANY": "Ugro Capital Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-AUG-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE583D01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UJJIVAN",
      "NAME OF COMPANY": "Ujjivan Financial Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-2016",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE334L01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UJJIVANSFB",
      "NAME OF COMPANY": "Ujjivan Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-DEC-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE551W01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ULTRACEMCO",
      "NAME OF COMPANY": "UltraTech Cement Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-AUG-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE481G01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UMAEXPORTS",
      "NAME OF COMPANY": "Uma Exports Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "07-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0GIU01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UMANGDAIRY",
      "NAME OF COMPANY": "Umang Dairies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-DEC-2015",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE864B01027",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "UMESLTD",
      "NAME OF COMPANY": "Usha Martin Education & Solutions Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-JUL-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE240C01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "UNICHEMLAB",
      "NAME OF COMPANY": "Unichem Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-FEB-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE351A01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "UNIDT",
      "NAME OF COMPANY": "United Drilling Tools Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-SEP-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE961D01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNIENTER",
      "NAME OF COMPANY": "Uniphos Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JAN-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE037A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "UNIINFO",
      "NAME OF COMPANY": "Uniinfo Telecom Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JAN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE481Z01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNIONBANK",
      "NAME OF COMPANY": "Union Bank of India",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-SEP-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE692A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNIPARTS",
      "NAME OF COMPANY": "Uniparts India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-DEC-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE244O01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNITECH",
      "NAME OF COMPANY": "Unitech Limited",
      "SERIES": "BZ",
      "DATE OF LISTING": "08-SEP-1999",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE694A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "UNITEDPOLY",
      "NAME OF COMPANY": "United Polyfab Gujarat Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "31-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE368U01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNITEDTEA",
      "NAME OF COMPANY": "The United Nilgiri Tea Estates Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JAN-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE458F01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNIVASTU",
      "NAME OF COMPANY": "Univastu India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-JUN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE562X01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNIVCABLES",
      "NAME OF COMPANY": "Universal Cables Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE279A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNIVPHOTO",
      "NAME OF COMPANY": "Universus Photo Imagings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-FEB-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03V001013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UNOMINDA",
      "NAME OF COMPANY": "UNO Minda Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-FEB-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE405E01023",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "UPL",
      "NAME OF COMPANY": "UPL Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JAN-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE628A01036",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "URAVI",
      "NAME OF COMPANY": "Uravi T and Wedge Lamps Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE568Z01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "URJA",
      "NAME OF COMPANY": "Urja Global Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-MAR-2017",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE550C01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "USHAMART",
      "NAME OF COMPANY": "Usha Martin Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-OCT-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE228A01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "USK",
      "NAME OF COMPANY": "Udayshivakumar Infra Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0N0Y01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UTIAMC",
      "NAME OF COMPANY": "UTI Asset Management Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-OCT-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE094J01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UTKARSHBNK",
      "NAME OF COMPANY": "Utkarsh Small Finance Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JUL-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE735W01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "UTTAMSUGAR",
      "NAME OF COMPANY": "Uttam Sugar Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-APR-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE786F01031",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "V2RETAIL",
      "NAME OF COMPANY": "V2 Retail Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-JUL-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE945H01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VADILALIND",
      "NAME OF COMPANY": "Vadilal Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JUN-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE694D01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VAIBHAVGBL",
      "NAME OF COMPANY": "Vaibhav Global Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-APR-2004",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE884A01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "VAISHALI",
      "NAME OF COMPANY": "Vaishali Pharma Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-JAN-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE972X01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VAKRANGEE",
      "NAME OF COMPANY": "Vakrangee Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-APR-2006",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE051B01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VALIANTLAB",
      "NAME OF COMPANY": "Valiant Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-OCT-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JWS01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VALIANTORG",
      "NAME OF COMPANY": "Valiant Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUL-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE565V01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VARDHACRLC",
      "NAME OF COMPANY": "Vardhman Acrylics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-SEP-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE116G01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VARDMNPOLY",
      "NAME OF COMPANY": "Vardhman Polytex Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "12-MAY-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE835A01011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VARROC",
      "NAME OF COMPANY": "Varroc Engineering Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-JUL-2018",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE665L01035",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VASCONEQ",
      "NAME OF COMPANY": "Vascon Engineers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-FEB-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE893I01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VASWANI",
      "NAME OF COMPANY": "Vaswani Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE590L01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VBL",
      "NAME OF COMPANY": "Varun Beverages Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-NOV-2016",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE200M01021",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "VCL",
      "NAME OF COMPANY": "Vaxtex Cotfab Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "19-APR-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE098201036",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VEDL",
      "NAME OF COMPANY": "Vedanta Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-MAY-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE205A01025",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VENKEYS",
      "NAME OF COMPANY": "Venky's (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE398A01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VENUSPIPES",
      "NAME OF COMPANY": "Venus Pipes & Tubes Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAY-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JA001018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VENUSREM",
      "NAME OF COMPANY": "Venus Remedies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-DEC-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE411B01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VERANDA",
      "NAME OF COMPANY": "Veranda Learning Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "11-APR-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0IQ001011",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VERTOZ",
      "NAME OF COMPANY": "Vertoz Advertising Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-MAY-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE188Y01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VESUVIUS",
      "NAME OF COMPANY": "Vesuvius India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-OCT-2002",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE386A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VETO",
      "NAME OF COMPANY": "Veto Switchgears And Cables Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "29-APR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE918N01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VGUARD",
      "NAME OF COMPANY": "V-Guard Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-MAR-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE951I01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VHL",
      "NAME OF COMPANY": "Vardhman Holdings Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-JUN-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE701A01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VIDHIING",
      "NAME OF COMPANY": "Vidhi Specialty Food Ingredients Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-MAR-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE632C01026",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VIJAYA",
      "NAME OF COMPANY": "Vijaya Diagnostic Centre Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-SEP-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE043W01024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VIJIFIN",
      "NAME OF COMPANY": "Viji Finance Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "11-JUL-2016",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE159N01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VIKASECO",
      "NAME OF COMPANY": "Vikas EcoTech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-DEC-2011",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE806A01020",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VIKASLIFE",
      "NAME OF COMPANY": "Vikas Lifecare Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-MAY-2019",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE161L01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VIMTALABS",
      "NAME OF COMPANY": "Vimta Labs Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-DEC-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE579C01029",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "VINATIORGA",
      "NAME OF COMPANY": "Vinati Organics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-JUL-2009",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE410B01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VINDHYATEL",
      "NAME OF COMPANY": "Vindhya Telelinks Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE707A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VINEETLAB",
      "NAME OF COMPANY": "Vineet Laboratories Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "15-JUN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE505Y01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VINNY",
      "NAME OF COMPANY": "Vinny Overseas Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "28-NOV-2022",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01KI01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VINYLINDIA",
      "NAME OF COMPANY": "Vinyl Chemicals (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-JUL-2008",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE250B01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VIPCLOTHNG",
      "NAME OF COMPANY": "VIP Clothing Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-AUG-2007",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE450G01024",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "VIPIND",
      "NAME OF COMPANY": "VIP Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-MAR-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE054A01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "VIPULLTD",
      "NAME OF COMPANY": "Vipul Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-APR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE946H01037",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VIRINCHI",
      "NAME OF COMPANY": "Virinchi Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "03-MAY-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE539B01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VISAKAIND",
      "NAME OF COMPANY": "Visaka Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-AUG-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE392A01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "VISESHINFO",
      "NAME OF COMPANY": "Visesh Infotecnics Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-JAN-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE861A01058",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VISHNU",
      "NAME OF COMPANY": "Vishnu Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-MAR-2015",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE270I01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "VISHWARAJ",
      "NAME OF COMPANY": "Vishwaraj Sugar Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-OCT-2019",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE430N01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "VIVIDHA",
      "NAME OF COMPANY": "Visagar Polytex Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "21-MAY-2013",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE370E01029",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VLEGOV",
      "NAME OF COMPANY": "VL E-Governance & IT Solutions Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE03HW01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VLSFINANCE",
      "NAME OF COMPANY": "VLS Finance Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE709A01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VMART",
      "NAME OF COMPANY": "V-Mart Retail Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-FEB-2013",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE665J01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VOLTAMP",
      "NAME OF COMPANY": "Voltamp Transformers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE540H01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VOLTAS",
      "NAME OF COMPANY": "Voltas Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-1995",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE226A01021",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "VPRPL",
      "NAME OF COMPANY": "Vishnu Prakash R Punglia Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-SEP-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0AE001013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VRLLOG",
      "NAME OF COMPANY": "VRL Logistics Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-APR-2015",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE366I01010",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VSSL",
      "NAME OF COMPANY": "Vardhman Special Steels Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-MAY-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE050M01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VSTIND",
      "NAME OF COMPANY": "VST Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-SEP-2003",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE710A01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VSTTILLERS",
      "NAME OF COMPANY": "V.S.T Tillers Tractors Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JUN-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE764D01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "VTL",
      "NAME OF COMPANY": "Vardhman Textiles Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "14-JAN-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE825A01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "WABAG",
      "NAME OF COMPANY": "VA Tech Wabag Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-OCT-2010",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE956G01038",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "WALCHANNAG",
      "NAME OF COMPANY": "Walchandnagar Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-SEP-1996",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE711A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "WANBURY",
      "NAME OF COMPANY": "Wanbury Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "29-JAN-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE107F01022",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WEALTH",
      "NAME OF COMPANY": "Wealth First Portfolio Managers Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-JAN-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE658T01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WEBELSOLAR",
      "NAME OF COMPANY": "Websol Energy System Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "15-MAY-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE855C01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WEIZMANIND",
      "NAME OF COMPANY": "Weizmann Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-MAY-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE080A01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WEL",
      "NAME OF COMPANY": "Wonder Electricals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JAN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE02WG01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WELCORP",
      "NAME OF COMPANY": "Welspun Corp Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "24-MAY-2005",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE191B01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "WELENT",
      "NAME OF COMPANY": "Welspun Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-NOV-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE625G01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WELINV",
      "NAME OF COMPANY": "Welspun Investments and Commercials Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "20-SEP-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE389K01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WELSPUNLIV",
      "NAME OF COMPANY": "Welspun Living Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-DEC-2003",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE192B01031",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "WENDT",
      "NAME OF COMPANY": "Wendt (India) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-AUG-2006",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE274C01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WESTLIFE",
      "NAME OF COMPANY": "WESTLIFE FOODWORLD LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "05-JUN-2023",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE274F01020",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "WEWIN",
      "NAME OF COMPANY": "WE WIN LIMITED",
      "SERIES": "BE",
      "DATE OF LISTING": "15-JUN-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE082W01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WHEELS",
      "NAME OF COMPANY": "Wheels India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-APR-2000",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE715A01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WHIRLPOOL",
      "NAME OF COMPANY": "Whirlpool of India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "06-APR-2010",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE716A01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WILLAMAGOR",
      "NAME OF COMPANY": "Williamson Magor & Company Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "08-FEB-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE210A01017",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WINDLAS",
      "NAME OF COMPANY": "Windlas Biotech Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "16-AUG-2021",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0H5O01029",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "WINDMACHIN",
      "NAME OF COMPANY": "Windsor Machines Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-AUG-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE052A01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "WINSOME",
      "NAME OF COMPANY": "Winsome Yarns Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "25-AUG-2011",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE784B01035",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WIPL",
      "NAME OF COMPANY": "The Western India Plywoods Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "17-APR-2017",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE215F01023",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WIPRO",
      "NAME OF COMPANY": "Wipro Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "08-NOV-1995",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE075A01022",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "WOCKPHARMA",
      "NAME OF COMPANY": "Wockhardt Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-FEB-2000",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE049B01025",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "WONDERLA",
      "NAME OF COMPANY": "Wonderla Holidays Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAY-2014",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE066O01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WORTH",
      "NAME OF COMPANY": "Worth Peripherals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "04-AUG-2020",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE196Y01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WSI",
      "NAME OF COMPANY": "W S Industries (I) Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-AUG-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE100D01014",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "WSTCSTPAPR",
      "NAME OF COMPANY": "West Coast Paper Mills Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "17-JAN-2001",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE976A01021",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "XCHANGING",
      "NAME OF COMPANY": "Xchanging Solutions Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-MAR-2005",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE692G01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "XELPMOC",
      "NAME OF COMPANY": "Xelpmoc Design And Tech Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "04-FEB-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE01P501012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "XPROINDIA",
      "NAME OF COMPANY": "Xpro India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-APR-2004",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE445C01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "YAARI",
      "NAME OF COMPANY": "Yaari Digital Integrated Services Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "18-AUG-2011",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE126M01010",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "YASHO",
      "NAME OF COMPANY": "Yasho Industries Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "21-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE616Z01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "YATHARTH",
      "NAME OF COMPANY": "Yatharth Hospital & Trauma Care Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "07-AUG-2023",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JO301016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "YATRA",
      "NAME OF COMPANY": "Yatra Online Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "28-SEP-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE0JR601024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "YESBANK",
      "NAME OF COMPANY": "Yes Bank Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-JUL-2005",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE528G01035",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "YUKEN",
      "NAME OF COMPANY": "Yuken India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "02-SEP-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE384C01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZAGGLE",
      "NAME OF COMPANY": "Zaggle Prepaid Ocean Services Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "22-SEP-2023",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE07K301024",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ZEEL",
      "NAME OF COMPANY": "Zee Entertainment Enterprises Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-SEP-1998",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE256A01028",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ZEELEARN",
      "NAME OF COMPANY": "Zee Learn Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "20-DEC-2010",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE565L01011",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ZEEMEDIA",
      "NAME OF COMPANY": "Zee Media Corporation Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JAN-2007",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE966H01019",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ZENITHEXPO",
      "NAME OF COMPANY": "Zenith Exports Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "10-JUL-1996",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE058B01018",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZENITHSTL",
      "NAME OF COMPANY": "Zenith Steel Pipes & Industries Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "30-APR-2007",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE318D01020",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZENSARTECH",
      "NAME OF COMPANY": "Zensar Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "09-JUL-2003",
      "PAID UP VALUE": 2,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE520A01027",
      "FACE VALUE": 2
    },
    {
      "SYMBOL": "ZENTEC",
      "NAME OF COMPANY": "Zen Technologies Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "30-MAR-2015",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE251B01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ZFCVINDIA",
      "NAME OF COMPANY": "ZF Commercial Vehicle Control Systems India Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "01-OCT-2008",
      "PAID UP VALUE": 5,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE342J01019",
      "FACE VALUE": 5
    },
    {
      "SYMBOL": "ZIMLAB",
      "NAME OF COMPANY": "Zim Laboratories Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "25-NOV-2022",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE518E01015",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZODIAC",
      "NAME OF COMPANY": "Zodiac Energy Limited",
      "SERIES": "BE",
      "DATE OF LISTING": "14-DEC-2021",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE761Y01019",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZODIACLOTH",
      "NAME OF COMPANY": "Zodiac Clothing Company Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-SEP-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE206B01013",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZOMATO",
      "NAME OF COMPANY": "Zomato Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "23-JUL-2021",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE758T01015",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ZOTA",
      "NAME OF COMPANY": "Zota Health Care LImited",
      "SERIES": "EQ",
      "DATE OF LISTING": "19-AUG-2019",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE358U01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZUARI",
      "NAME OF COMPANY": "Zuari Agro Chemicals Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "27-NOV-2012",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE840M01016",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZUARIIND",
      "NAME OF COMPANY": "ZUARI INDUSTRIES LIMITED",
      "SERIES": "EQ",
      "DATE OF LISTING": "12-APR-1995",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE217A01012",
      "FACE VALUE": 10
    },
    {
      "SYMBOL": "ZYDUSLIFE",
      "NAME OF COMPANY": "Zydus Lifesciences Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "18-APR-2000",
      "PAID UP VALUE": 1,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE010B01027",
      "FACE VALUE": 1
    },
    {
      "SYMBOL": "ZYDUSWELL",
      "NAME OF COMPANY": "Zydus Wellness Limited",
      "SERIES": "EQ",
      "DATE OF LISTING": "13-NOV-2009",
      "PAID UP VALUE": 10,
      "MARKET LOT": 1,
      "ISIN NUMBER": "INE768C01010",
      "FACE VALUE": 10
    }
];

function findISIN(symbol) {
  const result = symbols.find( ({ SYMBOL }) => SYMBOL === symbol );
  return result?result["ISIN NUMBER"]:null;

};
console.log(findISIN('M&M'));
module.exports = findISIN;