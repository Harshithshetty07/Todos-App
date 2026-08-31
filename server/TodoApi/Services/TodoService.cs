using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.DTOs;
using TodoApi.Models;

namespace TodoApi.Services;

public class TodoService : ITodoService
{
    private readonly AppDbContext _context;

    public TodoService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<TodoItem>> GetAllAsync()
    {
        return await _context.Todos.OrderBy(t => t.CreatedAt).ToListAsync();
    }

    public async Task<TodoItem?> GetByIdAsync(int id)
    {
        return await _context.Todos.FindAsync(id);
    }

    public async Task<TodoItem> CreateAsync(TodoCreateDto dto)
    {
        var todo = new TodoItem
        {
            Title = dto.Title,
            IsComplete = dto.IsComplete
        };

        _context.Todos.Add(todo);
        await _context.SaveChangesAsync();
        return todo;
    }

    public async Task<bool> UpdateAsync(int id, TodoUpdateDto dto)
    {
        var todo = await _context.Todos.FindAsync(id);
        if (todo == null) return false;

        todo.Title = dto.Title;
        todo.IsComplete = dto.IsComplete;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var todo = await _context.Todos.FindAsync(id);
        if (todo == null) return false;

        _context.Todos.Remove(todo);
        await _context.SaveChangesAsync();
        return true;
    }
}