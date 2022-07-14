export const createImageTable = `
  DROP TABLE IF EXISTS images;
  CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    name VARCHAR DEFAULT '',
    url VARCHAR(255),
    tag VARCHAR(100),
    date DATE NOT NULL DEFAULT CURRENT_DATE
  );
`;

export const insertImages = `
    INSERT INTO images(name, url, tag)
    VALUES ('photo1', 'www.firstphoto.com', 'my first photo'),
            ('photo2', 'www.secondphoto.com', 'my second photo'),
            ('photo3', 'www.thirdphoto.com','my third photo')
`;

export const dropImageTable = "DROP TABLE images";
