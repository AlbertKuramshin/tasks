<template>
  <div class="detail-wrap">
    <div class="detail">

      <div class="field-item">
        <label for="name">Наименование</label>
        <input id="name" class="field" v-model="actions.item.name" name="field_id" type="text"/>
      </div>

      <div class="field-item">
        <label for="url">URL</label>
        <input id="url" class="field" v-model="actions.item.url" name="field_id" type="text"/>
      </div>

      <div class="field-item">
        <label for="material">Материал</label>
        <input id="material" type="checkbox" v-model="actions.item.is_material" class="checkbox_field" name="field_id"/>
      </div>

      <div class="field-item">
        <label for="desc">Описание</label>
        <textarea id="desc" class="field" v-model="actions.item.description" name="field_id" type="text"/>
      </div>

      <div class="field-item">
        <label for="price">Цена</label>
        <input id="price" class="field" v-model="actions.item.price" name="field_id" type="number"/>
      </div>

      <div class="field-item">
        <label for="cat">Категория</label>
        <select id="cat" class="field" v-model="selected">
          <option v-for="item in categories.categories" :value="item" :key="item.id" >
            {{ item.name }}
          </option>
        </select>

      </div>

      <div class="field-item">
        <label for="cipher">Шифр</label>
        <input id="cipher" class="field" v-model="actions.item.cipher" name="field_id" type="text"/>
      </div>
    </div>

    <div class="technical">

      <div class="addItems">
        <label>Добавить действие</label>
        <input type="text"
               @focus="isFocus = true"
               @blur="isFocus = false"
               v-model="nameValue"
               @input="searchItem(nameValue)"
        >
        <span class="deleter" @click="clearInput()">×</span>
        <div class="hidden-list" :style="styleList" :class="{ active: isFocus }">
            <span
                v-for="(item, idx) in this.options.length > 0 ? this.options : this.categories.technical_action_options" :key="idx"
                @click="addItem(item)"
            >
                {{ item.name }}
            </span>
        </div>
      </div>

      <draggable
          class="list" :list="actions.technical_actions"
          ghost-class="ghost"
      >
        <div
            class="list-group"
            v-for="(item, idx) in actions.technical_actions"
            :key="idx"
        >
          <span class="itemName">{{ item.name }}</span>
          <span class="delete" @click="deleteItem(idx)">×</span>
        </div>
      </draggable>

      <div class="rawData">
        <pre>
          {{ getActions }}
        </pre>
      </div>
    </div>

    <div class="field-button">
      <button type="submit" @click="saveDetail">Сохранить</button>
    </div>

    <div class="detailData" v-show="showData">
      <pre>
        {{ detailData }}
      </pre>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "Detail",
  components: {
    draggable
  },
  data: () => ({
    actions: {
      "item": {
        "id": 9570,
        "name": "8.2 Ом Резистор 0402",
        "url": "https://www.elitan.ru/price/item1612488",
        "is_material": false,
        "description": "Power Rating(s) 0.063 (116)(W)\r\nPackage Case 0402\r\nCase Style Molded\r\nProduct Height (mm) 0.35(mm)\r\nProduct Length (mm) 1(mm)\r\nProduct Depth (mm) 0.5(mm)\r\nConstruction Rectangular\r\nTolerance (+ or -) 5%\r\nPackaging  Tape and Reel\r\nTemperature Coefficient -200 to 500(ppm°C)\r\nFailure Rate Not Required\r\nTermination Style PAD\r\nResistance 8.2(ohm)\r\nMilitary Standard Not Required\r\nOperating Temp Range -55C to 155C\r\nType Thick Film\r\nNumber of Terminals 2\r\nCase Size 0402\r\nProduct Diameter (mm) Not Required(mm)\r\nLead Spacing (nom) Not Required(mm)\r\nCurrent Sensing NO\r\nAnti-Sulfurated NO\r\nAnti-Surge NO\r\nPackage Type SMD\r\nTemperature Range @ Derated Power 70 TO 155\r\nобновлено 07-07-2019",
        "price": "1.0",
        "category_id": null,
        "cipher": "CR0402-J/-8R2G@BOURNS, SMRES/0402-8R2-J"
      },
      "technical_actions": [
        {
          "id": 11610,
          "number": 1,
          "name": "Закупка электроники",
          "t_id": 40
        },
        {
          "id": 12170,
          "number": 2,
          "name": "3D печать",
          "t_id": 13
        }
      ]
    },
    categories: {
      "categories": [
        {
          "id": 1,
          "name": "Крепеж"
        },
        {
          "id": 2,
          "name": "Электронные компоненты"
        },
        {
          "id": 3,
          "name": "Электронные устройства"
        },
        {
          "id": 4,
          "name": "Провода/кабели/шнуры/оплетки"
        },
        {
          "id": 5,
          "name": "материал для станочного участка"
        },
        {
          "id": 6,
          "name": "Расходники для принтеров"
        }
      ],
      "technical_action_options": [
        {
          "name": "Изготовление на стороне",
          "id": 10
        },
        {
          "name": "Слесарная доработка",
          "id": 11
        },
        {
          "name": "Фрезеровка",
          "id": 5
        },
        {
          "name": "Токарка",
          "id": 7
        },
        {
          "name": "Лазерка оргстекла",
          "id": 28
        },
        {
          "name": "УФ печать",
          "id": 16
        },
        {
          "name": "Порошковая покраска",
          "id": 8
        },
        {
          "name": "Упаковка",
          "id": 29
        },
        {
          "name": "Покраска",
          "id": 22
        },
        {
          "name": "Изготовление Кабеля/Жгута",
          "id": 23
        },
        {
          "name": "Токарка на стороне",
          "id": 32
        },
        {
          "name": "Объемный электрический монтаж",
          "id": 25
        },
        {
          "name": "покраска габаритных деталей на стороне ",
          "id": 33
        },
        {
          "name": "Сервис(ремонт\\замена)",
          "id": 34
        },
        {
          "name": "Учет брака",
          "id": 35
        },
        {
          "name": "Комплектовка",
          "id": 37
        },
        {
          "name": "Закупка железа",
          "id": 38
        },
        {
          "name": "Изготовление объемного корпуса",
          "id": 39
        },
        {
          "name": "Закупка SMC",
          "id": 42
        },
        {
          "name": "Закупка химии",
          "id": 43
        },
        {
          "name": "Заказ печатных плат",
          "id": 14
        },
        {
          "name": "Вакуумная формовка",
          "id": 19
        },
        {
          "name": "аренда",
          "id": 45
        },
        {
          "name": "Закупка обвяз",
          "id": 41
        },
        {
          "name": "Сварка",
          "id": 9
        },
        {
          "name": "Лазерная сварка",
          "id": 64
        },
        {
          "name": "Лазерка метала",
          "id": 4
        },
        {
          "name": "Генетика",
          "id": 65
        },
        {
          "name": "Лазерка метала на стороне",
          "id": 31
        },
        {
          "name": "сборка",
          "id": 66
        },
        {
          "name": "Сверлить ",
          "id": 67
        },
        {
          "name": "Закупка не по PDM в кг\\метрах\\шт",
          "id": 46
        },
        {
          "name": "Заказ блоков Элепс",
          "id": 48
        },
        {
          "name": "Сборка робота",
          "id": 36
        },
        {
          "name": "Литейка",
          "id": 6
        },
        {
          "name": "Сборка стандартов",
          "id": 18
        },
        {
          "name": "Заказ типографических услуг",
          "id": 49
        },
        {
          "name": "Заказ мешков на стороне",
          "id": 50
        },
        {
          "name": "Заказ пружин на стороне",
          "id": 51
        },
        {
          "name": "Нарезка профиля",
          "id": 52
        },
        {
          "name": "Литье пены",
          "id": 53
        },
        {
          "name": "Литье пластика",
          "id": 54
        },
        {
          "name": "Литье силикона",
          "id": 55
        },
        {
          "name": "Пайка (автомонтаж)",
          "id": 56
        },
        {
          "name": "Пайка (ручная)",
          "id": 12
        },
        {
          "name": "Литье полиуретана",
          "id": 57
        },
        {
          "name": "сборка инструмента",
          "id": 71
        },
        {
          "name": "Закупка периферии",
          "id": 44
        },
        {
          "name": "Тестирование\\ настройка нижнего уровня",
          "id": 30
        },
        {
          "name": "застывание клея ",
          "id": 83
        },
        {
          "name": "Маркетинговые описания",
          "id": 59
        },
        {
          "name": "Сервисная документация",
          "id": 60
        },
        {
          "name": "Литье ТПА",
          "id": 61
        },
        {
          "name": "Контроль ",
          "id": 62
        },
        {
          "name": "Межоперационный контроль",
          "id": 72
        },
        {
          "name": "Приёмка готовой продукции ",
          "id": 73
        },
        {
          "name": "Цинковое литье под давлением",
          "id": 74
        },
        {
          "name": "Заказ наклеек",
          "id": 63
        },
        {
          "name": "Закупка",
          "id": 3
        },
        {
          "name": "Фотополимерный принтер",
          "id": 58
        },
        {
          "name": "Полимеризация пластика",
          "id": 76
        },
        {
          "name": "Механическая обработка",
          "id": 77
        },
        {
          "name": "Подготовка и разбор матрицы ",
          "id": 78
        },
        {
          "name": "Нанесения УФ-печати",
          "id": 84
        },
        {
          "name": "Застывание клея #сборка робота",
          "id": 75
        },
        {
          "name": "Внутренняя проверка #сборка робота",
          "id": 79
        },
        {
          "name": "Мех. обработка #сборка робота",
          "id": 80
        },
        {
          "name": "Первичная проверка и настройка #сборка робота",
          "id": 81
        },
        {
          "name": "Конечная настройка и проверка #сборка робота",
          "id": 82
        },
        {
          "name": "Литье смолы",
          "id": 85
        },
        {
          "name": "Двухкомпонентное литьё ТПА",
          "id": 87
        }
      ]
    },
    nameValue: '',
    options : [],
    styleList: '',
    isFocus: false,
    selected: null,
    detailData: {},
    showData: false
  }),
  methods : {
    searchItem() {
      if (this.nameValue !== "" && this.nameValue !== undefined) {
        this.options = this.categories.technical_action_options.filter(e => {
          return e.name.toLowerCase().includes(this.nameValue.toLowerCase())
        });
        if (this.options.length === 0) {
          this.options = [];
          this.styleList = 'height: 0; border: unset;';
        }
        if (this.options.length <= 3) {
          this.styleList = "height: " + 35 * this.options.length + "px;"
        }
        if (this.options.length >= 4) {
          this.styleList = "height: 130px;"
        }
      } else {
        this.options = this.categories.technical_action_options;
        this.styleList = "height: 130px;"
      }
    },
    clearInput() {
      this.nameValue = '';
      this.options = [];
      this.styleList = 'height: 0; border: unset;';
    },
    addItem(item) {
      console.log(item)
      let exists = this.actions.technical_actions.filter(v => {
        return v.t_id === item.id
      });
      if (exists.length === 0) {
        item.number = this.actions.technical_actions.length;
        item.t_id = item.id;
        this.actions.technical_actions.push(item);
      }
    },
    deleteItem(idx) {
      this.actions.technical_actions.splice(idx, 1);
    },
    saveDetail() {
      this.actions.item.selected = this.selected;
      this.detailData = {
        item: this.actions.item,
        technical_actions: this.actions.technical_actions
      }
      this.detailData = JSON.stringify(this.detailData, null, '\t');
      this.showData = true;
    }
  },
  created() {
    console.log(this.categories.categories)
    this.selected = this.categories.categories.find(i => i.id === this.selected);
  },
  computed: {
    getActions() {
      return JSON.stringify(this.actions.technical_actions, null, '\t');
    }
  }
}
</script>

<style lang="less">
  .detail-wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & .detail {
      width: 100%;

      & .field-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 30px 20px;

        & .checkbox_field {
          padding: 10px;
          margin-right: 50px;
        }

        & label {
          align-self: flex-start;
        }

        & select {
          width: 40px;
        }

        & .field {
          width: 40%;
          border: none;
          border-bottom: 1px solid transparent;
          border-radius: 5px;
          background-color: #fafafa;
          color: #1B2631;
          transition: all 0.3s linear;
          -webkit-appearance: none;
          -moz-appearance: none;
          //background-image: linear-gradient(to top, #1B2631, #acbfd2);
          //box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
          padding: 10px;
        }
      }
    }

    & .technical {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      & .addItems {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 30%;
        min-height: 30px;

        & input {
          width: 100%;
        }

        .deleter {
          position: absolute;
          top: 18px;
          right: 2px;
          float: right;
          cursor: pointer;
          font-size: 20px;
          font-weight: 400;
        }

        & .hidden-list {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 0;
          background: #fafafa;
          z-index: -2;
          overflow-y: scroll;
          transition: all .3s linear;

          & span {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            color: #000;
            border-bottom: 1px solid;
            padding: 0 10px;
            min-height: 35px;
            cursor: pointer;
          }
        }

        & .active {
          height: 130px;
          z-index: 99;

          & span {
            color: #000;
          }
        }
      }

      & .ghost {
        opacity: 0.5;
        background: #c8ebfb;
      }
      & .list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 20px;

        & .list-group {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding: .75rem 1.25rem;
          border: 1px solid rgba(0,0,0,.125);
          cursor: move;
          width: 230px;
          text-align: center;
          float: left;


          & .delete {
            padding: 0 3px 0 12px;
            cursor: pointer;
            font-size: 20px;
            font-weight: 400;
          }
        }
      }
    }

    & .detailData {
      width: 100%;
      color: #22562d;
      & pre {
        background-color: #eaeaea;
      }
    }
  }
</style>