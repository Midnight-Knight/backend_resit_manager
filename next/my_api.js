export default class My_Api {
  static #url = 'http://localhost:2999/api';

  //перенесён
  static async getInstitute(institute /* данный параметр понадобится потом, для того чтобы вытянуть данные конкретного института */) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_institute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ institute: institute }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getCheckInstitute(LinkFormat = false) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_check_institute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ linkFormat: LinkFormat }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getDepartmentsInternal(institute) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_departments_internal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ institute: institute }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getDepartmentsExternal(institute) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_departments_external', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ institute: institute }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getCheckDepartments() {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/get/get_check_departments');
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getDepartment(department) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_department', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ department: department }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getDepartmentsBaccalaureate(department) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_departments_baccalaureate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ department: department }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getDepartmentsMagistracy(department) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_departments_magistracy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ department: department }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  //перенесён
  static async getDepartmentsSpecialty(department) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_departments_specialty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ department: department }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  static async getAllDiscipline(){
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/get/get_check_discipline');
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  static async getDisciplineInfo(discipline) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_discipline_info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ discipline: discipline }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }

  static async getRetakesDiscipline(discipline) {
    let data = undefined;
    try {
      const response = await fetch(this.#url + '/post/get_retakes_discipline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ discipline: discipline }),
      });
      data = await response.json();
    } catch (e) {
      data = undefined;
    }
    return data;
  }
}
