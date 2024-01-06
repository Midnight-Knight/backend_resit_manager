const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');

const PORT = process.env.PORT || 2999;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(express.json());

const connection = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'appDB',
  charset: 'utf8mb4'
});

connection.connect(function(err) {
  if (err) {
    console.error('Ошибка подключения к БД: ' + err.stack);
    return;
  }

  // Если подключение успешно, выводим сообщение об этом
  console.log('Подключение к БД успешно установлено');
});

function ParseOpeningHoursObject(data) {
  const mergeOpeningHours = (hours) => {
    hours.forEach((elem) => {
      const element = buffer.opening_hours.find((item) => item.time === elem.time);
      if (element !== undefined) {
        const index = buffer.opening_hours.indexOf(element);
        buffer.opening_hours[index] = {
          day: element.day + ', ' + elem.day,
          time: element.time,
        };
      } else {
        buffer.opening_hours.push({ day: elem.day, time: elem.time });
      }
    });
  };

  const buffer = { opening_hours: [] };

  if (data.opening_hours_department !== undefined) {
    const departmentHours = data.opening_hours_department;
    mergeOpeningHours(departmentHours);
    data.opening_hours_department = buffer.opening_hours;
  }

  if (data.opening_hours_coordinator !== undefined) {
    const coordinatorHours = data.opening_hours_coordinator;
    buffer.opening_hours = [];
    mergeOpeningHours(coordinatorHours);
    data.opening_hours_coordinator = buffer.opening_hours;
  }

  return data;
}

app.post('/api/post/get_institute', async (req, res) => {
  try {
    let data = {};
    switch (req.body.institute) {
      case "iit":
        const results = await new Promise((resolve, reject) => {
          connection.query("SELECT * FROM get_institute", (err, results, fields) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        });

        if (results.length > 0) {
          data = {
            title: results[0].title,
            contacts_department: JSON.parse(results[0].contacts_department),
            opening_hours_department: JSON.parse(results[0].opening_hours_department),
            important_information_department: results[0].important_information_department,
            coordinator: results[0].coordinator,
            contacts_coordinator: JSON.parse(results[0].contacts_coordinator),
            opening_hours_coordinator: JSON.parse(results[0].opening_hours_coordinator),
            important_information_coordinator: results[0].important_information_coordinator,
            image_institute: "http://localhost:" + PORT + results[0].image_institute
          };
        }

        res.status(200).json(ParseOpeningHoursObject(data));
        break;
      default:
        res.status(404).json({ error: 'Институт не найден' });
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса к базе данных:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.post('/api/post/get_check_institute', async (req, res) => {
  try {
    let data = {};
    const results = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM get_check_institute", (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    if (results.length > 0) {
      data = {array: JSON.parse(results[0].data)};
    }
    switch (req.body.linkFormat) {
      case true:
        const newData = data.array.map((elem) => {
          return {
            institute: '/' + elem.institute,
            title: elem.title,
            image: elem.image,
          };
        })
        res.status(200).json(newData);
        break;
      default:
        res.status(200).json(data.array);
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса к базе данных:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.post('/api/post/get_departments_internal', async (req, res) => {
  try {
    let data = {};
    switch (req.body.institute) {
      case "iit":
        const results = await new Promise((resolve, reject) => {
          connection.query("SELECT * FROM get_departments_internal", (err, results, fields) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        });

        if (results.length > 0) {
          data = JSON.parse(results[0].data);
        }

        res.status(200).json(data);
        break;
      default:
        res.status(404).json({ error: 'Институт не найден' });
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса к базе данных:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.post('/api/post/get_departments_external', async (req, res) => {
  try {
    let data = {};
    switch (req.body.institute) {
      case "iit":
        const results = await new Promise((resolve, reject) => {
          connection.query("SELECT * FROM get_departments_external", (err, results, fields) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        });

        if (results.length > 0) {
          data = JSON.parse(results[0].data);
        }

        res.status(200).json(data);
        break;
      default:
        res.status(404).json({ error: 'Институт не найден' });
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса к базе данных:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.get('/api/get/get_check_departments', async (req, res) => {
  let data = {};
  const results = await new Promise((resolve, reject) => {
    connection.query("SELECT * FROM get_check_departments", (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = JSON.parse(results[0].data);
  }

  res.status(200).json(data);
})

app.post('/api/post/get_department', async (req, res) => {
  let data = {title: req.body.department};
  const results = await new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM get_department WHERE department="${req.body.department}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = {
      title: results[0].title,
      chief: results[0].chief,
      contacts_department: JSON.parse(results[0].contacts_department),
      opening_hours_department: JSON.parse(results[0].opening_hours_department),
      important_information: results[0].important_information,
      image_department: "http://localhost:"+PORT+results[0].image_department
    };
  }


  res.status(200).json(ParseOpeningHoursObject(data));
})

app.post('/api/post/get_departments_baccalaureate', async (req, res) => {
  let data = {};
  const results = await new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM get_departments_baccalaureate WHERE department="${req.body.department}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = results.map((elem) => {
      return {
        title: elem.title,
        image: 'http://localhost:'+PORT+elem.image,
        href: elem.href,
        course: elem.course,
        control: elem.control,
        groups: JSON.parse(elem.groups)
      }
    })
  }


  res.status(200).json(data);
})

app.post('/api/post/get_departments_magistracy', async (req, res) => {
  let data = {};
  const results = await new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM get_departments_magistracy WHERE department="${req.body.department}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = results.map((elem) => {
      return {
        title: elem.title,
        image: 'http://localhost:'+PORT+elem.image,
        href: elem.href,
        course: elem.course,
        control: elem.control,
        groups: JSON.parse(elem.groups)
      }
    })
  }


  res.status(200).json(data);
})

app.post('/api/post/get_departments_specialty', async (req, res) => {
  let data = {};
  const results = await new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM get_departments_specialty WHERE department="${req.body.department}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = results.map((elem) => {
      return {
        title: elem.title,
        image: 'http://localhost:'+PORT+elem.image,
        href: elem.href,
        course: elem.course,
        control: elem.control,
        groups: JSON.parse(elem.groups)
      }
    })
  }


  res.status(200).json(data);
})

app.get('/api/get/get_check_discipline', async (req, res) => {
  let data = {};
  const results = await new Promise((resolve, reject) => {
    connection.query("SELECT discipline FROM discipline", (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = JSON.parse(results[0].data);
  }

  res.status(200).json(data);
})

app.post('/api/post/get_discipline_info', async (req, res) => {
  let data = {};
  const results = await new Promise((resolve, reject) => {
    connection.query(`SELECT title, allowance, image, course, control, groups, format, important_information FROM discipline WHERE discipline="${req.body.discipline}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = {
      title: results[0].title,
      allowance: results[0].allowance,
      image: 'http://localhost:'+PORT+results[0].image,
      course: results[0].course,
      control: results[0].control,
      groups: JSON.parse(results[0].groups),
      format: results[0].format,
      important_information: results[0].important_information
    }
  }


  res.status(200).json(data);
})

app.post('/api/post/get_retakes_discipline', async (req, res) => {
  let data = {};
  const results = await new Promise((resolve, reject) => {
    connection.query(`SELECT array FROM discipline WHERE discipline="${req.body.discipline}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

  if (results.length > 0) {
    data = {
      array: JSON.parse(results[0].array)
    }
  }


  res.status(200).json(data);
})


const server = app.listen(PORT, () => {
  console.log('server start, port '+ PORT);
})