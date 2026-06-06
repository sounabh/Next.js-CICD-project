// Simple in-memory database (for demo purposes)
// In production, use PostgreSQL, MongoDB, etc.

class Database {
  constructor() {
    this.users = [];
  }

  async createUser(user) {
    const newUser = {
      ...user,
      id: Math.random().toString(36).substring(2, 11),
      createdAt: new Date(),
    };

    this.users.push(newUser);
    return newUser;
  }

  async findUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  async getAllUsers() {
    return this.users.map(({ password, ...user }) => user);
  }
}

export const db = new Database();