export class AuthorAdapter {
  static transform(authorItem) {
    return {
      id: authorItem.id,
      name: authorItem.name,
      surname: authorItem.surname,
      birthdate: authorItem.birthdate,
    };
  }
}
