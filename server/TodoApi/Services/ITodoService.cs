using TodoApi.DTOs;
using TodoApi.Models;

namespace TodoApi.Services;

public interface ITodoService
{
    Task<List<TodoItem>> GetAllAsync();
    Task<TodoItem?> GetByIdAsync(int id);
    Task<TodoItem> CreateAsync(TodoCreateDto dto);
    Task<bool> UpdateAsync(int id, TodoUpdateDto dto);
    Task<bool> DeleteAsync(int id);
}