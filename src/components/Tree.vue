<template>
  <div class="tree-wrap">
    <div class="tree">
      <pre>
        {{ this.countDetails(tree) }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tree",
  data: () => ({
    tree: {
      "name": "a998 Порт эндовидеокамеры",
      "one_item_count": null,
      "children": [{
        "name": "a894 Кабель информационный №2",
        "one_item_count": "1.0",
        "children": [{
          "name": "i2104 ТМАРК-25 D:3,0/1,0мм Трубка термоусадочная, (черная, в упаковке 1.5м) (ед.изм.мм)",
          "id": 2104,
          "one_item_count": "30.0"
        }, {
          "name": "i2426 Вилка 103653-3 TYCO Electronics",
          "id": 2426,
          "one_item_count": "1.0"
        }, {
          "name": "i1807 HB pitch 2.0mm контакты для MU",
          "id": 1807,
          "one_item_count": "4.0"
        }, {
          "name": "i2427 5-104505-3, Клемма  TYCO Electronics",
          "id": 2427,
          "one_item_count": "4.0"
        }, {
          "name": "i845 MU-4F, Разъем с контактами c шагом 2.00 мм, HB-04",
          "id": 845,
          "one_item_count": "1.0"
        }, {
          "name": "i677 CCC-4G, Кабель коммуникационный 4 провода, экранированный (ед.изм.мм)",
          "id": 677,
          "one_item_count": "400.0"
        }, {
          "name": "i2098 Кабель NT4x0.22 NOOTECH, экранированный (ед.изм.мм)",
          "id": 2098,
          "one_item_count": "1.0"
        }]
      }, {
        "name": "a999 Ось Х",
        "one_item_count": "1.0",
        "children": [{
          "name": "a1000 Вилка",
          "one_item_count": "1.0",
          "children": [{
            "name": "i2674 Ребро",
            "id": 2674,
            "one_item_count": "1.0"
          }, {
            "name": "i7028 Ухо",
            "id": 7028,
            "one_item_count": "2.0"
          }, {
            "name": "i7029 Площадка",
            "id": 7029,
            "one_item_count": "1.0"
          }, {
            "name": "i851 Ось_ Сталь 10",
            "id": 851,
            "one_item_count": "1.0"
          }]
        }, {
          "name": "i849 Стакан_ Д16 ",
          "id": 849,
          "one_item_count": "1.0"
        }, {
          "name": "i850 Винт",
          "id": 850,
          "one_item_count": "1.0"
        }, {
          "name": "i852 Втулка_ Д16",
          "id": 852,
          "one_item_count": "1.0"
        }, {
          "name": "i854 Стакан_ Д16 ",
          "id": 854,
          "one_item_count": "2.0"
        }, {
          "name": "i855 Винт М3х4 DIN 7380",
          "id": 855,
          "one_item_count": "8.0"
        }, {
          "name": "i856 Гайка М5 DIN 934",
          "id": 856,
          "one_item_count": "1.0"
        }, {
          "name": "i857 Подшипник d5хD16хh5",
          "id": 857,
          "one_item_count": "2.0"
        }]
      }, {
        "name": "a1001 Кронштейн",
        "one_item_count": "1.0",
        "children": [{
          "name": "i2695 Кронштейн",
          "id": 2695,
          "one_item_count": "1.0"
        }, {
          "name": "i2696 Кронштейн",
          "id": 2696,
          "one_item_count": "1.0"
        }, {
          "name": "i3617 Ребро",
          "id": 3617,
          "one_item_count": "1.0"
        }]
      }, {
        "name": "a990 Имитатор троакара",
        "one_item_count": "1.0",
        "children": [{
          "name": "a855 Плата троакара эндовидеокамеры Port_IMU_rev3.1",
          "one_item_count": "1.0",
          "children": [{
            "name": "i1662 GRM155R71C104K, Конденсатор, 0402, 0.1 мкФ, 16В, X7R, 10%",
            "id": 1662,
            "one_item_count": "15.0"
          }, {
            "name": "i1664 GRM1555C1H180J, Конденсатор, 0402, 18 пФ, 50В, NPO, 5%",
            "id": 1664,
            "one_item_count": "2.0"
          }, {
            "name": "i1655 PLS-40, Вилка штыревая 2,54мм 1х40 прямая",
            "id": 1655,
            "one_item_count": "0.1"
          }, {
            "name": "i1663 GRM155R71H103K, Конденсатор, 0402, 0.01 мкФ, 50В, X7R, 10%",
            "id": 1663,
            "one_item_count": "1.0"
          }, {
            "name": "i1665 GRM155R61A105K, Конденсатор, 0402, 1 мкФ, 10В, X5R, 10%",
            "id": 1665,
            "one_item_count": "1.0"
          }, {
            "name": "i2005 GRM155R71H222K, Конденсатор, 0402, 2.2 нФ, 50В, X7R, 10%",
            "id": 2005,
            "one_item_count": "1.0"
          }, {
            "name": "i152 KX-9A 8.0 MHz, Кварцевый резонатор  (ABM3B-8.000 MHZ-B2-T)",
            "id": 152,
            "one_item_count": "1.0"
          }, {
            "name": "i928 SS49E, Датчик магнитного поля",
            "id": 928,
            "one_item_count": "6.0"
          }, {
            "name": "i3805 FYLS-0603BUGC, Светодиод зеленый, 0603, 1.6х0.8х0.6мм, 570нм 40мКд",
            "id": 3805,
            "one_item_count": "1.0"
          }, {
            "name": "i2943 Печатная плата Port_IMU_rev3.1",
            "id": 2943,
            "one_item_count": "1.0"
          }, {
            "name": "i3806 FYLS-0603BURC 0603, Светодиод красный, 1.6х0.8х0.6мм, 631нм, 80мКд",
            "id": 3806,
            "one_item_count": "1.0"
          }, {
            "name": "i1666 RC0402JR-07160RL Резистор, 0402, 160 Ом, 5%",
            "id": 1666,
            "one_item_count": "2.0"
          }, {
            "name": "i1593 MPU-6000 MEMS Module, Tri-Axis Gyroscope, Tri-Axis Accelerometer, ± 2g, ± 4g, ± 8g, QFN, 24",
            "id": 1593,
            "one_item_count": "1.0"
          }, {
            "name": "i1998 RC0402JR-074K7L, Резистор, 0402, 4.7 кОм, 5%",
            "id": 1998,
            "one_item_count": "2.0"
          }, {
            "name": "i2389 Вилка на плату 2,0 мм угловая 4 pin, B4B-PH-SM4-TB",
            "id": 2389,
            "one_item_count": "1.0"
          }, {
            "name": "i1669 Резистор, 0402, 10 кОм, 5% RC0402JR-0710KL",
            "id": 1669,
            "one_item_count": "2.0"
          }, {
            "name": "i1670 STM32F103T8U6, Микросхема",
            "id": 1670,
            "one_item_count": "1.0"
          }, {
            "name": "i931 MAX14783EASA+, Микросхема",
            "id": 931,
            "one_item_count": "1.0"
          }, {
            "name": "i930 TSOP2136, ИК-приемник 36кГЦ",
            "id": 930,
            "one_item_count": "1.0"
          }, {
            "name": "i1068 LM1117IMPX/NOPB, Микросхема, SOT-223 (N05B)",
            "id": 1068,
            "one_item_count": "1.0"
          }]
        }, {
          "name": "a868 Крышка троакара",
          "one_item_count": "1.0",
          "children": [{
            "name": "i871 Гайка М2 DIN 934",
            "id": 871,
            "one_item_count": "3.0"
          }, {
            "name": "i2623 химия Пластик Task 9  85D (А+В), (ед.изм.кг)",
            "id": 2623,
            "one_item_count": "1.0"
          }, {
            "name": "i870 Воронка",
            "id": 870,
            "one_item_count": "1.0"
          }, {
            "name": "i869 Крышка троакара",
            "id": 869,
            "one_item_count": "1.0"
          }]
        }, {
          "name": "a869 Основание троакара",
          "one_item_count": "1.0",
          "children": [{
            "name": "i553 Гайка М3 DIN 934 ",
            "id": 553,
            "one_item_count": "1.0"
          }, {
            "name": "i866 Основание троакара",
            "id": 866,
            "one_item_count": "1.0"
          }, {
            "name": "i2623 химия Пластик Task 9  85D (А+В), (ед.изм.кг)",
            "id": 2623,
            "one_item_count": "1.0"
          }]
        }, {
          "name": "i868 Стекло крышки",
          "id": 868,
          "one_item_count": "1.0"
        }, {
          "name": "i513 Винт М2х8 DIN 912",
          "id": 513,
          "one_item_count": "3.0"
        }]
      }, {
        "name": "a984 Направляющая",
        "one_item_count": "1.0",
        "children": [{
          "name": "i858 Направляющая",
          "id": 858,
          "one_item_count": "1.0"
        }, {
          "name": "i2623 химия Пластик Task 9  85D (А+В), (ед.изм.кг)",
          "id": 2623,
          "one_item_count": "1.0"
        }]
      }, {
        "name": "i2679 Ось",
        "id": 2679,
        "one_item_count": "2.0"
      }, {
        "name": "i2680 Радиатор",
        "id": 2680,
        "one_item_count": "1.0"
      }, {
        "name": "i860 Винт М3х8 DIN 7380",
        "id": 860,
        "one_item_count": "4.0"
      }, {
        "name": "i856 Гайка М5 DIN 934",
        "id": 856,
        "one_item_count": "2.0"
      }, {
        "name": "i857 Подшипник d5хD16хh5",
        "id": 857,
        "one_item_count": "3.0"
      }]
    },
    details: {},
  }),
  methods: {
    countDetails(tree) {
      let queue = [];
      let next = tree

      while(next) {
        if (next.children) {
          next.children.forEach((item) => {
            queue.push(item);
            if (this.details[item.name]) {
              this.details[item.name] += parseInt(item.one_item_count);
            } else {
              this.details[item.name] = parseInt(item.one_item_count);
            }
          });
        }
        next = queue.shift();
      }
      return JSON.stringify(this.details, null, '\t');
    }
  }
}

</script>

<style scoped>

</style>