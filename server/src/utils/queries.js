export const createImageTable = `
  DROP TABLE IF EXISTS images;
  CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    name VARCHAR DEFAULT '',
    comment VARCHAR
  );
`;

export const insertImages = `
    INSERT INTO images(name, comment)
    VALUES ('photo1', 'my first photo'),
            ('photo2', 'my second photo')
`;

export const dropImageTable = "DROP TABLE images";
